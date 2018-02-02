import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from './../../services/api';
@Component({
  //selector: 'loginpage',
  template: `
  <div class="container">

          <div class="row">
              <div class="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">
                <form #loginForm="ngForm" (ngSubmit)="loginSubmit(loginForm)">
                      <div class="card" style="width: 28rem;">
                          <div class="card-body">

                              <!--Header-->
                              <div class="form-header default-color">
                                  <h3><i class="fa fa-lock"></i> Login:</h3>
                              </div>

                              <!--Body-->
                              <div class="md-form">
                                  <i class="fa fa-envelope prefix grey-text"></i>
                                  <input id="defaultForm-email" [(ngModel)]="email" name="uemail" #lemail="ngModel" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="form-control" type="text">
                                  <label for="defaultForm-email">Your email</label>
                                  <span *ngIf="lemail.touched && lemail.invalid" class="error">
                             Email error !
                            </span>
                              </div>

                              <div class="md-form">
                                  <i class="fa fa-lock prefix grey-text"></i>
                                  <input id="defaultForm-pass" type="password" [(ngModel)]="password" name="upassword" #lpassword="ngModel" required class="form-control">
                                  <label for="defaultForm-pass">Your password</label>
                                  <div *ngIf="lpassword.touched && lpassword.invalid" class="error">
                                      Password !
                                  </div>
                              </div>

                              <div class="text-center">
                                  <button class="btn btn-default waves-effect waves-light">Login</button>
                              </div>

                          </div>

                          <!--Footer-->
                          <div class="modal-footer">
                              <div class="options">
                                  <!--p>Not a member? <a href="#">Sign Up</a></p-->
                                  <p>Forgot <a href="#">Password?</a></p>
                              </div>
                          </div>

                  </div>
                  </form>
              </div>
                <div>


      </div>

    `,
  })

  export class trainerloginpagelist {
    public name:string=''; public val:string='';
    public uemail:string=''; public upassword:string='';
    constructor(public api:ApiService){
    //  console.log(this.regModel);
    }

    loginSubmit(loginForm:any){
      if(loginForm.valid){
       //alert('Submitted....');
    //  console.log('Submitted',loginForm.value);
         this.api.trainerlogin(loginForm.value).then( (res:any)=>{
          // console.log('resss',res);

          if(res.status=="success"){
          //  alert("admin");
            window.location.href="/trainer/dashboard";
          }


   } )
  }
}
}
