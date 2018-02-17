import { Component } from '@angular/core';
//import { StorageService } from './services/storage';
import { FormsModule } from '@angular/forms';
import { ApiService } from './../../../services/api';


@Component({
  selector: 'usercreatepage',
  template: `
  <navbarheader></navbarheader>
    <div class="row">
      <div class="col-lg-4 col-md-12">
       <div class="card card-cascade narrower">
          <div class="view gradient-card-header default-color">
             <h4 class="h4-responsive">Create User </h4>
          </div>
          <div class="card-body ">
             <form #regiForm="ngForm"  class="myForm" (ngSubmit)="formRegi(regiForm)" >
             <div class="form-group row d-flex">
                <p  class="label col-md-4 pt-2">Name</p>
                <div class="col-md-8">
                   <input class="form-control pt-0" mdbactive="" type="text"  [(ngModel)]="rname" name="uname" #lname="ngModel" required />
                   <span *ngIf="lname.touched && lname.invalid" class="error">
                   name error !
                   </span>
                </div>
             </div>
             <div class="form-group row d-flex">
                <p  class="label col-md-4 pt-2">Email</p>
                <div class="col-md-8">
                   <input class="form-control pt-0" mdbactive="" type="text"  [(ngModel)]="remail" name="uemail" #lemail="ngModel" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"/>
                   <span *ngIf="lemail.touched && lemail.invalid" class="error">
                   Email error !
                   </span>
                </div>
             </div>
             <div class="form-group row d-flex">
                <p  class="label col-md-4 pt-2">Password</p>
                <div class="col-md-8">
                   <input  class="form-control pt-0" mdbactive=""  type="password" [(ngModel)]="rpassword" name="upassword" #lpassword="ngModel" required/>
                   <div *ngIf="lpassword.touched && lpassword.invalid" class="error">
                      Please enter Password !
                   </div>
                </div>
             </div>
             <div class="form-group row d-flex">
                <p  class="label col-md-4 pt-2">Mobile</p>
                <div class="col-md-8">
                   <input   class="form-control pt-0" mdbactive="" type="text"  [(ngModel)]="mnumber" name="umnumber" #lmnumber="ngModel" required />
                   <span *ngIf="lmnumber.touched && lmnumber.invalid" class="error">
                   Please enter mobile number!
                   </span>
                </div>
             </div>
             <div class="form-group row d-flex">
                <p  class="label col-md-4 pt-2">Type</p>
                <div class="col-md-8">
                   <!-- fieldset class="form-group">
                      <input [(ngModel)]="mtype" #ltype="ngModel"  name="type" type="radio" id="radio1" checked="checked">
                      <label for="radio1">Admin</label>
                      </fieldset>

                      <fieldset class="form-group">
                      <input [(ngModel)]="mtype" #ltype="ngModel"  name="type" type="radio" id="radio2">
                      <label for="radio2">Trainee</label>
                      </fieldset>

                      <fieldset class="form-group">
                      <input [(ngModel)]="mtype" #ltype="ngModel"  name="type" type="radio" id="radio3">
                      <label for="radio3">Trainer</label>
                      </fieldset-->
                   <select class="form-control pt-0l" class="form-control pt-0" mdbactive="" type="text"  [(ngModel)]="mtype" name="untype" #lmtype="ngModel" required >
                   <option>Trainee</option>
                   <option>Trainer</option>
                   </select>
                </div>
             </div>
             <div class="text-center">
                <button  class="btn btn-success waves-light" mdbrippleradius="">Submit</button>
             </div>
             </form>
          </div>
       </div>
    </div>
    <div class="col-lg-8 col-md-12">
       <div class="card card-cascade narrower">
          <div class="view gradient-card-header default-color">
             <h4 class="h4-responsive">User List</h4>
          </div>
          <div class="card-body ">
             <table  class="table table-striped">
                <thead >
                   <tr >
                      <th >Username</th>
                      <th >Email</th>
                      <th >Mobile</th>
                      <th >Type</th>
                      <th >Action</th>
                   </tr>
                </thead>
                <tbody *ngIf="records">
                   <tr  *ngFor="let key of arrayKeys(records)">
                      <th scope="row">{{records[key].name}}</th>
                      <td >{{records[key].email}}</td>
                      <td >{{records[key].mobile}}</td>
                      <td >{{records[key].type}}</td>
                      <td ><a [routerLink]="['/userdetails/userdetails']"> <i class="fa fa-upload" aria-hidden="true"></i></a>
                      <a [routerLink]="['/userprofile/userprofile']"> <i class="fa fa-address-card-o" aria-hidden="true"></i></a>
                         <a (click) = "deleteuserslist(records[key].email)" ><i class="fa fa-trash" aria-hidden="true"></i></a>
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>
       </div>
    </div>
    </div>
    `,
  })

  export class usercreatelistpage {
    title = 'New User Create Page';
    records:any;

      constructor(public api:ApiService){
      //  console.log(this.regModel);
      }
      ngOnInit(){
      this.viewuserslist();
      //this.deleteuserslist();
    }

      arrayKeys(obj:any){
        //console.log("----",obj);
        return Object.keys(obj);
      }
// Register User
  formRegi(regiForm:any){
        if(regiForm.valid){
           this.api.register(regiForm.value).then( (res:any)=>{
            //  console.log('resss',res);
            if(res.status=="success"){
            alert('Register Success');
            this.viewuserslist();
          }else{
            alert('Register Failed');
          }
         } )
        }
      }

// list Users
viewuserslist() {
  //console.log("viewuserslist-1");
 this.api.viewUserslist({}).then( (res:any)=>{
 this.records= res;
})

  }
  //delete user
  deleteuserslist(email) {
  this.api.deleteUserslist({"email":email}).then( (res:any)=>{
  this.records= res;
  //console.log(res);
  this.viewuserslist();
 })
}
}
