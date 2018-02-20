module.exports ={

  MEAGER:{
    scope:{
      mongo:true,
      postData:true
    }
  },


demoController:class {
  constructor(MEAGER){
    this.mongo    = MEAGER.import.mongo;
    this.postData = MEAGER.import.postData;
  }

testregister(){
    return this.postData.then(res =>{
     //console.log(res);
      return this.mongo.insert(
        {
          name:res.uname,
          password:res.upassword,
          mobile:res.umnumber,
          email:res.uemail,
          type:res.untype
        },'users').then(res=>{ //doubt
       if(res=='success'){
            return {
              resType: 'json', //'text/html',
              data: {
                status: 'success'
              }
            }
       }
       else{
         return {
           resType: 'json', //'text/html',
           data: {
             status: 'failed'
           }
         }
       }
     });

    }
    );
}

  adminlogin() {

      return this.postData.then(res => {
        let searchQuery = {
          email:res.uemail,
          password:res.upassword,
          type:'admin'
        }
        return this.mongo.findOne(searchQuery,'users',{}).then(res=>{
          if(res[0] && res[0].email){
          //  console.log('00000000>',searchQuery);
          //if(res.email){
            return {
              resType: 'json',//'text/html',
              data:  {status:'success' }
              //console.log("Trainer-----",email);
              //console.log("Trainer-----",untype);
            }
          }
          else{
            return {
              resType: 'json',//'text/html',
              data:  {status:"failure"}
            }
          }
         }).catch(error=>{
         });
      });

  }

  trainerlogin() {

      return this.postData.then(res => {
        let searchQuery = {
          email:res.uemail,
          password:res.upassword,
          type:'trainer'
        }
        return this.mongo.findOne(searchQuery,'users',{}).then(res=>{
          if(res[0] && res[0].email){
          //if(res.email){
            return {
              resType: 'json',//'text/html',
              data:  {status:'success' }
            }
          }
          else{
            return {
              resType: 'json',//'text/html',
              data:  {status:"failure"}
            }
          }
         }).catch(error=>{
         });
      });

  }

  traineelogin() {

      return this.postData.then(res => {
        let searchQuery = {
          email:res.uemail,
          password:res.upassword,
          type:'trainee'
        }
        return this.mongo.findOne(searchQuery,'users',{}).then(res=>{
          if(res[0] && res[0].email){
          //if(res.email){
            return {
              resType: 'json',//'text/html',
              data:  {status:'success' }

            }
          }
          else{
            return {
              resType: 'json',//'text/html',
              data:  {status:"failure"}
            }
          }
         }).catch(error=>{
         });

      });

  }



}

}
