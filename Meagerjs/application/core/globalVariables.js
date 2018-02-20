module.exports ={
  //__dirname
  path:{
    base               : './',
    controller         : 'application/controllers/',
    templates          : 'application/templates',
    userRouterPath     : 'application/config/router.js',
    userMongoCongig    : 'application/config/mongoConfig.js'
  },
  availableScope       : [
                           'postData','mongo'
                         ]
};
