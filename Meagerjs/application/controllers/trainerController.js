module.exports ={

  MEAGER:{
    scope:{
      mongo:true,
      postData:true
    }
  },


trainerController:class {
  constructor(MEAGER){
    this.mongo    = MEAGER.import.mongo;
    this.postData = MEAGER.import.postData;
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
          }).catch(error => {});
        })
       }
     }
  }
