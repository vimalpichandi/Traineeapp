"use strict";

class CoreLibrary {
 constructor(config) {
  this.fs         = config.fs;
  this.path       = config.path;
  this.serverReq  = config.serverReq;
  this.serverRes  = config.serverRes;
  this.routerPath = config.routerPath;
  this.availableScope  = config.availableScope;
  this.mongoUserConfig = config.mongoUserConfig;

 }
 urlParse(url){
     let urlParser = ( url ).split("/");

       return {
         controller: urlParser[1],
         action    : urlParser[2],
         param     : urlParser.slice(3, (urlParser.length) ),
         baseUrl   : url
       }


 }
 loadController($meager_url){

   let $controller  = $meager_url.controller;
   let $action      = $meager_url.action;
   let $param       = $meager_url.param;
   let $baseUrl     = $meager_url.baseUrl;

   let $availableScope =this.availableScope;

   let $userRouterPath = this.checkUserRouterPath(this.routerPath,$baseUrl);

   if($userRouterPath!=null){
     $controller = $userRouterPath.controller;
     $action = $userRouterPath.action;
     $param  = ($userRouterPath.param);
   }

   let controllerName = $controller+'Controller';
   let path = ( (this.path.base) + (this.path.controller) )+controllerName+'.js';

   let templatePath = ( (this.path.base) + (this.path.templates) )+'/'+$controller+'/'+$action+'.html';

   if ( this.fs.existsSync(path) ) { // available;
     try{

    //   console.log($baseUrl,this.routerPath);
    let MEAGER={
      import:{
        mongo:{},
        postData: {}
      }
    }
        //  let controller = new ''+controllerName+''();
     let obj =  require('../controllers/'+controllerName+'.js');

    let controllerScopes=obj.MEAGER.scope;

    Object.keys(controllerScopes).map((scopeName, index)=> {
        let scopeValue = controllerScopes[scopeName];
        if( ($availableScope).indexOf(scopeName)!=-1){
           //console.log(scopeName,'Available');
           try{
           MEAGER.import[scopeName]=this['SCOPE_'+scopeName+'_CLASS'](scopeValue);
         }catch(error){
           console.log( error );
         }
        }else{
          console.log('Error ! ',scopeName,'scope not available');
        }

    });


     //Initiating Controller
     let controller = new obj[controllerName](MEAGER);
     //Initiating action
    // controller[$action](); //duplicate came
    this.promiseAction(controller,$action).then(loadAction=>{
        this.buildHtml(
                    loadAction,
                    this.htmlHeaderParse(controller['header']),
                    this.fs.readFileSync(templatePath).toString()
                  );
    });


   }catch(err){
     console.log('Error while trying to load '+controllerName+' : ',err);
   }

    }else{
      //console.log('not available');
    }
 }

promiseAction(controller,$action){
  return new Promise( (resolve,reject)=>{ resolve( controller[$action]()   ) } );
}



 checkUserRouterPath(routes,baseUrl){
   let result=null;
   let url_param_string='';
   let url_param=[];
   let base_url_clone='';
   baseUrl= baseUrl.substring(1);
   let routerParam=[];

   Object.keys(routes).map(function(objectKey, index) {
       let item = routes[objectKey];
       if(  (routes[index].path).indexOf('**') !== -1   ){

          if(
            (baseUrl.split( (routes[index].path).split('**')[0] ) )[1]  ||
            ((routes[index].path).split('**')[0] == baseUrl )
          ){
      base_url_clone  ='';  base_url_clone  =   (routes[index].path).split('**')[0];
      url_param_string='';  url_param_string = baseUrl.split( base_url_clone )[1];
            if( url_param_string ){
              url_param=[];
              url_param=url_param_string.split('/');
              for(var i=0; i< url_param.length; i++ ){
                   (routerParam).push( url_param[i] );
                 }

               }
            baseUrl=base_url_clone+"**";
          }

      }  //console.log(routes[index].path+'=='+baseUrl);
           if(routes[index].path==baseUrl){

             result = {
               controller : routes[index].redirect.controller,
               action     : routes[index].redirect.action,
               param      : routerParam.concat( routes[index].redirect.param )
             }
           }
   });

     return result;
 }

 buildHtml(controllerAction,header,body) {

    (this.serverRes).setHeader('Access-Control-Allow-Origin', '*');
    (this.serverRes).setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    (this.serverRes).setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    (this.serverRes).setHeader('Access-Control-Allow-Credentials', true); // If needed

   if(controllerAction['resType']=='text/html') {

  // concatenate header string
  // concatenate body string

  var HTML= '<!DOCTYPE html>'
          + '<html><header>'
          + '<script> var MEAGER_controller= '+JSON.stringify(controllerAction['data'])+';</script>'
          + header
          + '</header><body>' + body + '</body></html>';

   (this.serverRes).writeHead(200, {'Content-Type': 'text/html'});
   (this.serverRes).write(HTML);
   (this.serverRes).end('');

 }else if(controllerAction['resType']=='json'){

   (this.serverRes).writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
   (this.serverRes).end( JSON.stringify(controllerAction['data']) );

 }else if(controllerAction['resType']=='json'){

   (this.serverRes).writeHead(200, {'Content-Type': 'text/plain'});
   (this.serverRes).write( JSON.stringify(controllerAction['data']) );
   (this.serverRes).end('');
 }

   return '';

}

htmlHeaderParse(header){
  if(header){

  }else{
    return '';
  }
}

SCOPE_mongo_CLASS(scopeValue){
  if(scopeValue==true){
    let $MONGODBLIB = require('./drivers/mongodb/mongoLibrary.js');
    try {
        return new $MONGODBLIB['MongoLibrary'](this.mongoUserConfig);
      }catch(error){
        console.log('Error ! ',error);
      }
  }else{
    throw ('Error ! Invalid scope value on mongo, Its should be boolean true.');
  }

}

SCOPE_postData_CLASS(scopeValue){
  if(typeof scopeValue=='boolean'){

 if(scopeValue==true){
   return new Promise( (resolve,reject)=>{
       (this.serverReq).on('data', function(chunk) {
       // data += chunk.toString();   console.log(data);
    //   console.log( chunk.toString());
         resolve( JSON.parse(chunk.toString()) );
       });
   } );

 }


   }
}

}
module.exports=CoreLibrary;
