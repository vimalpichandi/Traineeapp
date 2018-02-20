var exports = module.exports = {};
//"use strict";



exports.start=function(config){
      const http = require('http')
,            url = require('url')
,            fs  = require('fs')
,            os  = require('os')
//,         router = require('router')
;


//Loading Core Library of Framework
const globalVariables = require("./globalVariables.js");
const CoreLibrary     = require("./lib.js");
const routerPath      = require("../../"+ globalVariables.path.userRouterPath ).ROUTES;
const mongoUserConfig     = require("../../"+ globalVariables.path.userMongoCongig ).MONGO;

http.createServer(function (req,res) {

//var data='';
/*
let requestPostData = [];
  req.on('data', function(chunk) {
    // data += chunk.toString();   console.log(data);
    requestPostData =  chunk.toString();

});

*/



      // console.log('method',req.method);
      // console.log('headers',req.headers);
      // console.log('url',req.url);



  const coreLib = new CoreLibrary({
    'fs'         : fs,
    'path'       : globalVariables.path,
    'serverReq'  : req,
    'serverRes'  : res,
    'routerPath' : routerPath,
    'availableScope' : globalVariables.availableScope,
    'mongoUserConfig': mongoUserConfig
  });


const $meager_url=(coreLib.urlParse(req.url));

coreLib.loadController($meager_url);


//res.end('');
}).listen(config.port,'0.0.0.0');

console.log(`

  ███╗   ███╗███████╗ █████╗  ██████╗ ███████╗██████╗
  ████╗ ████║██╔════╝██╔══██╗██╔════╝ ██╔════╝██╔══██╗
  ██╔████╔██║█████╗  ███████║██║  ███╗█████╗  ██████╔╝
  ██║╚██╔╝██║██╔══╝  ██╔══██║██║   ██║██╔══╝  ██╔══██╗
  ██║ ╚═╝ ██║███████╗██║  ██║╚██████╔╝███████╗██║  ██║
  ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝

  ....................................................
  MEAGER Started :-
         Server running on port :: `+ config.port+`
         Use <CTRL> + c to stop Application
  ....................................................
  `);
  /*
  console.log(`
   ....................................................
    MEAGER Started :-
           Server running on port :: `+ config.port+`
           Use <CTRL> + c to stop Application
    ....................................................
    `);
*/

//console.log('Server running on port '+config.port);
}



//start function


/** TODO
1.  If controller not exists check is there any file presents or not. if not then through error with hint like php MVC
2. DONE :: Before loading the controller check Routes whether user defined path or not
3. Mongo client
4. data validation helper

*/

/*
/*
var neededstats = [];
if(req.url=='/index.html' || req.url=='/') {
  fs.readFile('./index.html',function(err,data){
      res.end(data);
  });
  } else {
      var p = __dirname + '/' + req.params.filepath;
      fs.stat(p, function(err, stats) {
          if (err) {
              throw err;
          }
      neededstats.push(stats.mtime);
      neededstats.push(stats.size);
      res.send(neededstats);
 });

}






Object.keys(routes).map(function(objectKey, index) {
    let item = routes[objectKey];
    console.log(item);
});




  ##############################################
  ############  ### ##   ## ###  ###############
  ###########  ##    ## ##    ##  ##############
  ##########  ##      ##       ##  #############
  #########  ##       ##        ##  ############
  ##############################################






*/
