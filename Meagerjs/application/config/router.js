module.exports ={
  ROUTES: [
    {
      path:'users/login/**',
      redirect : {
        controller:'users', action:'signin', param:[]
      }
   }
   // use comma and add more

]};

/*

//Orginal source
module.exports ={
  {
    {
      path:'',
      redirect : {
        controller:'', action:'', param:[]
      }
     }
  }
  // use comma and add more
};



Note :-
  You can define routes with different path which are not having
  controller or action or both. Use /** to compile dynamic parameters.
  The param:[] component will help you to bind extra parameters which
  also be combined with dynamic url parameters, If you used /** in path.

users/login
   to
users/signin

   users/login/      <== for static url

   users/login?param=aa&param=bb  <== for dynamic url
     for this
       users/login/**
*/
