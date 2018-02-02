import { Component } from '@angular/core';
//import { StorageService } from './services/storage';
import { FormsModule } from '@angular/forms';
import { ApiService } from './../../../services/api';


@Component({
  selector: 'coursecreatepage',
  template: `
  <navbarheader></navbarheader>

    <section>
    <div class="row">
    <div class="col-md-12">
      <!--Panel-->
      <div class="card">
          <div class="card-header default-color lighten-1 white-text">
              New Course Create
          </div>
          <div class="card-body">
          <form #courseForm="ngForm"  class="myForm" (ngSubmit)="formCourse(courseForm)" >
          <div class="md-form">
          <i class="fa fa-pencil prefix"></i>
          <input class="form-control pt-0" mdbactive="" type="text"  [(ngModel)]="remail" name="cname" #lname="ngModel" required />
          <span *ngIf="lname.touched && lname.invalid" class="error">
          Email error !
          </span>
              <label for="form9" data-error="wrong" data-success="right">Please Enter Couser</label>
          </div>

         <div class="text-center">
           <button class="btn btn-default waves-light" mdbrippleradius="">Submit</button>
         </div>
       </form>
          </div>
      </div>
      </div>
      <!--/.Panel-->
    </div>
    <br>
    <div class="row">
     <div class="col-md-12">
      <!--Panel-->
      <div class="card">
          <div class="card-header default-color lighten-1 white-text">
            Course List
          </div>
          <div class="card-body">
          <table class="table">
                   <thead >
                       <tr >
                           <th >Course Name</th>

                           <th >Action</th>
                       </tr>
                   </thead>
                   <tbody *ngIf="records">
                      <tr  *ngFor="let key of arrayKeys(records)">
                           <th scope="row">{{records[key].name}}</th>

                           <td ><button class="btn btn-sm btn-outline-info waves-effect"><i class="fa fa-edit mr-1"></i> Edit</button>
                           <button class="btn btn-sm btn-outline-danger waves-effect"><i class="fa fa-trash mr-1"></i> Delete</button></td>
                       </tr>

                   </tbody>
               </table>
          </div>
      </div>
      <!--Panel-->
      </div>
      </div>
    </section>


  `,
})

export class coursecreatelistpage {
  Title="Course Details";

  records:any;

    constructor(public api:ApiService){
    //  console.log(this.regModel);
    }
    ngOnInit(){
    this.viewcourselist();
    //this.deletecourselist();
  }

    arrayKeys(obj:any){
      return Object.keys(obj);
    }

  // Register User
    formCourse(courseForm:any){
          if(courseForm.valid){
          //  alert('Submitted....');
          //console.log('Submitted',regiForm.value);
             this.api.newCourse(courseForm.value).then( (res:any)=>{
              //  console.log('resss',res);
              if(res.status=="success"){
              alert('Success');
              this.viewcourselist();
            }else{
              alert('Failed');
            }
           } )
          }
        }

        //  view courselist
        viewcourselist() {
          console.log("viewCourselist-1");
         this.api.viewCourselist({}).then( (res:any)=>{
         this.records= res;
         console.log('come');
        })
      }

    //  deleteCourselist(


      //){}

}
