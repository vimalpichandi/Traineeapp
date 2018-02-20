module.exports ={

  MEAGER:{
    scope:{
      mongo:true,
      postData:true
    }
  },


usersController:class {
  constructor(MEAGER){
    this.mongo    = MEAGER.import.mongo;
    this.postData = MEAGER.import.postData;
  }

  test(){
    return {
      resType: 'text/html',//'json',//'text/html',
      data:  [{name:'arun'},{name:'bala'}]
    }
  }
view(){

  var searchQuery={'name':'arun'};
  searchQuery={};
  var options={
    projection:{name:1,mobile:1},
    limit : 3, skip: 0,
    sort:{name:-1}
   };

   return this.mongo.removeAll( {'mobile':123} ,'users').then(res=>{
   //   console.log('UsersController->signin()',res);

      return {
        resType: 'json',//'text/html',//only MEAGER using
        data:  res
      }

    }).catch(error=>{

    });

/*


   return this.mongo.remove( {'mobile':123} ,'users').then(res=>{
   //   console.log('UsersController->signin()',res);

      return {
        resType: 'json',//'text/html',
        data:  res
      }

    }).catch(error=>{

    });

   return this.mongo.update(searchQuery,{'mobile':'3343435'},'users',options).then(res=>{
   //   console.log('UsersController->signin()',res);

      return {
        resType: 'json',//'text/html',
        data:  res
      }

    }).catch(error=>{

    });


  return this.mongo.count(searchQuery,'users',options).then(res=>{
  //   console.log('UsersController->signin()',res);

     return {
       resType: 'json',//'text/html',
       data:  res
     }


   }).catch(error=>{

   });

   */


}
  signin(){


    this.postData.then(res=>{
       //console.log(res);
      });

  //  this.postData().then(res=>{
  //    console.log(res);
  //  }).catch(err=>{
  //    console.log(err);
  //  } );

var searchQuery={'name':'arun'};
//searchQuery={};
/*
 this.mongo.insert({name:'arun',password:'123',mobile:'87867676577'},'users').then(res=>{
  if(res=='success'){

  }
});
*/
return this.mongo.find(searchQuery,'users',{}).then(res=>{
//   console.log('UsersController->signin()',res);

   return {
     resType: 'json',//'text/html',
     data:  res
   }


 }).catch(error=>{

 });


    //console.info('Log UsersController->signin()');


  }



}
}
