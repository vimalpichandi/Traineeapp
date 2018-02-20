module.exports = {

        MEAGER: {
            scope: {
                mongo: true,
                postData: true
            }
        },


        adminController: class {
            constructor(MEAGER) {
                this.mongo = MEAGER.import.mongo;
                this.postData = MEAGER.import.postData;
            }

            adminregister() {
                return this.postData.then(res => {
                    //console.log(res);
                    return this.mongo.insert({
                        name: res.uname,
                        password: res.upassword,
                        mobile: res.umnumber,
                        email: res.uemail,
                        type: res.untype
                    }, 'users').then(res => { //doubt
                        if (res == 'success') {
                            return {
                                resType: 'json', //'text/html',
                                data: {
                                    status: 'success'
                                }
                            }
                        } else {
                            return {
                                resType: 'json', //'text/html',
                                data: {
                                    status: 'failed'
                                }
                            }
                        }
                    });

                });
            }

            adminlogin() {

                return this.postData.then(res => {
                    let searchQuery = {
                        email: res.uemail,
                        password: res.upassword,
                        type: 'admin'
                    }
                    return this.mongo.findOne(searchQuery, 'users', {}).then(res => {
                        if (res[0] && res[0].email) {
                            //  console.log('00000000>',searchQuery);
                            //if(res.email){
                            return {
                                resType: 'json', //'text/html',
                                data: {
                                    status: 'success'
                                }
                                //console.log("Trainer-----",email);
                                //console.log("Trainer-----",untype);
                            }
                        } else {
                            return {
                                resType: 'json', //'text/html',
                                data: {
                                    status: "failure"
                                }
                            }
                        }
                    }).catch(error => {});
                })
              }
                // Admin User list
                viewUserslist() {
                    return this.postData.then(res => {

                        let searchQuery = { };

                        //console.log("getdate");
                        return this.mongo.find(searchQuery, 'users', {}).then(resMongo => {
                            return {
                                resType: 'json',
                                data: resMongo
                            }
                        });
                    });
                }

               updateUserlist() {
                 //console.log("adminController");
                 return this.postData.then(res => {
                   return this.mongo.find({'email':res.email},'users').then(res=>{
                     return {
                       resType:'json',
                       data:res
                     }
                   });
                 });
               }

              deleteUserslist() {
              //  console.log("welcome");

                return this.postData.then(res => {
                  return this.mongo.remove({'email':res.email},'users').then(res=>{
                    return {
                      resType:'json',
                      data:'success'
                    }
                  });
                });
         }

         updateUserdetails(){

           return this.postData.then(res=>{

           return this.mongo.update({'email':res.uemail},{
             address1: res.umaddress1,
              address2: res.umaddress2,
              city: res.umcity,
              postcode: res.umpostcode,
              country: res.umcountry,
              course:res.umcourse,
              course:res.umtrainer,
              batch:res.umbatch,
              timing:res.umtiming,
              fees:res.umfees,
              status:res.umstatus
         }, 'users').then(res => { //doubt
             if (res == 'success') {
                 return {
                     resType: 'json', //'text/html',
                     data: {
                         status: 'success'
                     }
                 }
             } else {
                 return {
                     resType: 'json', //'text/html',
                     data: {
                         status: 'failed'
                     }
                 }
             }
         });

     });
 }



         trainerlists(){}

              //New Courser
              newcourse() {
                  return this.postData.then(res => {
                      //console.log(res);
                      return this.mongo.insert({
                          name: res.cname
                      }, 'course').then(res => { //doubt
                          if (res == 'success') {
                              return {
                                  resType: 'json', //'text/html',
                                  data: {
                                      status: 'success'
                                  }
                              }
                          } else {
                              return {
                                  resType: 'json', //'text/html',
                                  data: {
                                      status: 'failed'
                                  }
                              }
                          }
                      });

                  });
              }
              // Admin viewcourse list
              viewcourselist() {
                  return this.postData.then(res => {

                      let searchQuery = { };

                      //console.log("getdate");
                      return this.mongo.find(searchQuery, 'course', {}).then(resMongo => {
                          return {
                              resType: 'json',
                              data: resMongo
                          }
                      });
                  });
              }



        }
      }
