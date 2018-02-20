module.exports={
MongoLibrary:class {
 constructor(userConfig) {

    this.userConfig   = userConfig;
    this.MongoClient  = require('mongodb').MongoClient;
    this.assert       = require('assert');

    this.recordsLimit = 50;

 }

 dbInitialize(){
   // Initialize connection once
   //"mongodb://localhost:27017/integration_test"
   return new Promise((resolve,reject)=>{
     this.MongoClient.connect(this.userConfig.uri, (err, database)=>{
     //   if(err) throw err;
         resolve(database);
      });
   });


 }

find(searchQuery={},collectionName,options={}){

  return new Promise((resolve,reject)=>{

    this.dbInitialize().then( db =>{

      let projection = ( typeof options['projection'] === 'object'  ) ? options['projection'] : {};
      let sort  =      ( typeof options['sort']  === 'object'  ) ? options['sort'] : {};
      let limit =      ( typeof options['limit'] === 'number'  ) ? options['limit'] : this.recordsLimit;
      let skip  =      ( typeof options['skip'] === 'number'  ) ? options['skip'] : 0;

let docsResponse=[];
      var cursor =db.collection( collectionName ).find( searchQuery ,projection ).sort(sort).limit(limit).skip(skip);
        cursor.each((err, doc) => {
           this.assert.equal(err, null);
           if (doc != null) {
              docsResponse.push( (doc) );
              resolve(docsResponse);
           } else {
            //  callback();
             resolve([]);
            db.close();
           }
        });




     });

  });

}

findOne(searchQuery={},collectionName,options){

  return new Promise((resolve,reject)=>{

    this.dbInitialize().then( db =>{

      let projection = ( typeof options['projection'] === 'object'  ) ? options['projection'] : {};

         let docsResponse=[];

           db.collection( collectionName ).findOne( searchQuery ,projection)
            .then(function(doc) {
                   if(doc){
                     docsResponse.push( (doc) );
                     resolve(docsResponse);
                   }else{
                     // throw new Error('No record found.');
                      resolve([]);
                       db.close();
                   }

             });

     });

  });

}

count(searchQuery={},collectionName){


  return new Promise((resolve,reject)=>{

    this.dbInitialize().then( db =>{

         let docsResponse=[];

           db.collection( collectionName ).count( searchQuery )
            .then(function(count) {
                     resolve(count);
                       db.close();
             });

     });

  });

}


insert(doc,collectionName){

  return new Promise((resolve,reject)=>{

    if (!Array.isArray(doc) && doc.length>0 ) {
       reject('failure :- doc need to be not empty array');
    }else{

        this.dbInitialize().then( db =>{

            db.collection( collectionName ).insertOne( doc, function(err, result) {

              resolve('success');
             db.close(); //callback();
           });


       });
  }//else checking array


  });

}



update(searchQuery,doc,collectionName){

  return new Promise((resolve,reject)=>{

    if (!Array.isArray(doc) && doc.length>0 ) {
       reject('failure :- doc need to be not empty array');
    }else{

        this.dbInitialize().then( db =>{


            db.collection( collectionName ).update(
               searchQuery,{
               $set: doc,
               $currentDate : { lastModifiedTimeRecorded:true }
             }
           ).then((res) => {

              resolve('success');
             db.close(); //callback();
           });


       });
  }//else checking array

  });

}


remove(searchQuery={},collectionName){

  return new Promise((resolve,reject)=>{

        this.dbInitialize().then( db =>{
            db.collection( collectionName ).remove(  searchQuery , { single:true } ).then((res) => {
              resolve('succcess');
             db.close(); //callback();
           });
       });

  });

}

removeAll(searchQuery={},collectionName){

  return new Promise((resolve,reject)=>{


        this.dbInitialize().then( db =>{
            db.collection( collectionName ).remove(  searchQuery ).then((res) => {
              resolve('succcess');
             db.close(); //callback();
           });
       });


  });

}



}
}
