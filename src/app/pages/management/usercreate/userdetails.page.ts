import { Component } from '@angular/core';
//import { StorageService } from './services/storage';
import { FormsModule } from '@angular/forms';
import { ApiService } from './../../../services/api';

@Component({
  selector: 'userdetailspage',
  template: `
  <navbarheader></navbarheader>
<section class="mb-3">
<div class="row">
<div class="col-lg-4 col-md-12 mb-r">
   <div  class="card mt-3 text-center">
      <h3  class="card-header bg-default white-text">User List</h3>
      <div  class="card-body">
         <div class=" text-center">
            <div class="list-group list-panel" *ngFor="let val of arrayKeys(records)">
               <a (click)="updateuserlist(records[val].email)" class="list-group-item d-flex justify-content-between dark-grey-text">
               {{records[val].name}}</a>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="col-lg-8 col-md-12 mb-r" *ngIf="updatelistrecords && updatelistrecords.name">
   <div  class="card mt-3 text-center">
      <h3  class="card-header bg-default white-text">user Details</h3>
      <div  class="card-body">
         <div class="card-body text-center">
            <div class="list-group list-panel">
               <form #updateuserdetails="ngForm" (ngSubmit)="updateUserdetails(updateuserdetails)" class="ng-untouched ng-pristine ng-valid">
                  <div class="row">
                     <div class="col-md-6" >
                        <div class="md-form">
                        <input class="form-control"   readonly  [(ngModel)]="updatelistrecords.name" id="txtusername" type="text" name="uname" #lname="ngModel" type="text">
                           <label class="active">User Name :</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                        <input class="form-control"  readonly [(ngModel)]="updatelistrecords.email" [(ngModel)]="updatelistrecords.email" id="txtemail" name="uemail" type="text">
                           <label class="active">Email :</label>

                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <div class="md-form">

                           <input class="form-control"   readonly  [(ngModel)]="updatelistrecords.mobile" id="txtmobile" name="umobie" #lmobile="ngModel" type="text">
                           <label class="active">Mobile :</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                           <input class="form-control"   readonly  [(ngModel)]="updatelistrecords.type" id="txttype" name="utype" #ltype="ngModel" type="text">
                           <label class="active">Type :</label>
                        </div>
                     </div>
                  </div>

                 <div class="row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <input [(ngModel)]="maddress1" name="umaddress1" #lmaddress1="ngModel" required class="form-control" id="txtaddress1" mdbactive="" placeholder="" type="text">
                           <label class="active">Address line 1</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                           <input [(ngModel)]="maddress2" name="umaddress2" #lmaddress2="ngModel" required class="form-control" id="txtaddress2" mdbactive="" placeholder="" type="text">
                           <label class="active">Address line 2</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-4">
                        <div class="md-form">
                           <input [(ngModel)]="mcity" name="umcity" #lmcity="ngModel" required class="form-control" id="txtcity" placeholder="" type="text">
                           <label class="active" >City</label>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="md-form">
                           <input [(ngModel)]="mpostcode" name="umpostcode" #lmpostcode="ngModel" required  class="form-control" id="txtpostcode" placeholder="" type="text">
                           <label class="active">Postcode</label>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="md-form">
                           <input  [(ngModel)]="mcountry" name="umcountry" #lmcounrty="ngModel" required  class="form-control" id="txtcountry" mdbactive="" type="text">
                           <label class="active">Country</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <div class="md-form" *ngIf="recordcourses" >
                        <select class="form-control" class="form-control pt-0" mdbactive="" type="text"
                         [(ngModel)]="mcourse" name="umcourse" #lmcourse="ngModel" required >
                        <option *ngFor="let key of arrayKeys(recordcourses)">{{recordcourses[key].name}}</option>
                        </select>
                        <label class="active" for="selectcourse">Select Coures :</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form" *ngIf="recordcourses" >
                        <select class="form-control pt-0l" class="form-control pt-0" mdbactive="" type="text"
                        [(ngModel)]="mtrainer" name="umtrainer" #lmtrainer="ngModel" required >
                        <option *ngFor="let key of arrayKeys(recordcourses)">{{recordcourses[key].name}}</option>
                        </select>
                          <label class="active" for="selectcourse">Select Trainer :</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <div class="md-form">
                        <input  [(ngModel)]="mbatch" name="umbatch" #lmbatch="ngModel" required   class="form-control" id="txtbatch" mdbactive="" placeholder="" type="text">
                        <label class="active">Select Batch :</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                           <input  [(ngModel)]="mtiming" name="umtiming" #lmtiming="ngModel" required   class="form-control" id="txttime" mdbactive="" placeholder="" type="text">
                           <label class="active">Timing :</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <input  [(ngModel)]="mfees" name="umfees" #lmfees="ngModel" required class="form-control" id="txtfees" mdbactive="" placeholder="" type="text">
                           <label class="active">Fees :</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                        <select [(ngModel)]="mstatus" name="umstatus" #lmstatus="ngModel"  required class="form-control pt-0l" class="form-control pt-0" mdbactive="" type="text">
                        <option>Active</option>
                        <option>Finished</option>
                        </select>
                          <label class="active">Status :</label>
                        </div>
                     </div>
                  </div>
                  <div class="text-center">
                     <button class="btn btn-outline-success" mdbrippleradius="">Update</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
</section>
      `,
    })

    export class userlistdetailspage {
      title = 'User List details';
      
          public records:any={};
          public recordcourses:any={};
          public updatelistrecords:any={};

      constructor(public api:ApiService){
      //  console.log(this.regModel);
      }


    ngOnInit(){
      this.viewuserslist();
      this.viewcourselist();
    }
    arrayKeys(obj:any){
      return Object.keys(obj);
    }
    // list Users
    viewuserslist() {
      //console.log("viewuserslist-1");
     this.api.viewUserslist({}).then( (res:any)=>{
     this.records= res;
    })

      }
      updateuserlist(mail){
      //  alert("click");
      //  console.log('mail',mail);
        this.api.updateUserlist({"email":mail}).then((res:any)=>{
        this.updatelistrecords=res[0];
        //  console.log(this.updatelistrecords);
        })
      }
      updateUserdetails(updateuserdetails:any){
        console.log(updateuserdetails.value);
            if(updateuserdetails.valid){

               this.api.updateUserdetails({
                 uemail: updateuserdetails.value.uemail,
                 umaddress1: updateuserdetails.value.umaddress1,
                 umaddress2: updateuserdetails.value.umaddress2,
                 umcity: updateuserdetails.value.umcity,
                 umpostcode: updateuserdetails.value.umpostcode,
                 umcountry: updateuserdetails.value.umcountry,
                 umcourse: updateuserdetails.value.umcourse,
                 umtrainer: updateuserdetails.value.umtrainer,
                 umbatch: updateuserdetails.value.umbatch,
                 umtiming: updateuserdetails.value.umtiming,
                 umfees: updateuserdetails.value.umfees,
                 umstatus: updateuserdetails.value.umstatus
               }).then( (res:any)=>{
                console.log('resss',res);
                if(res.status=="success"){
                alert('User Details Success');
                window.location.href="/userprofile/userprofile";
              }else{
                alert('User Details Failed');
              }
             } )
            }
          }
          //  view courselist
          viewcourselist() {
           this.api.viewCourselist({}).then( (res:any)=>{
           this.recordcourses= res;
          })
          }
    }
