import { Component } from '@angular/core';

@Component({
  selector: 'registernewtraineepage',
  template: `

    <navbarheader></navbarheader>

<div  class="col-lg-8 col-md-12">

    <div  class="card card-cascade narrower">

      <div  class="view gradient-card-header default-color">
        <h4  class="h4-responsive">New Trainee</h4>
      </div>

      <div class="card-body ">

        <form  novalidate="" class="ng-untouched ng-pristine ng-valid">
          <div  class="form-group row d-flex">
            <p  class="label col-md-4 pt-2">Student Name</p>
            <div  class="col-md-8">
              <input  class="form-control pt-0" id="defaultForm-studentname" mdbactive="" type="text">
            </div>
          </div>
          <div  class="form-group row d-flex">
            <p  class="label col-md-4 pt-2">NRIC</p>
            <div  class="col-md-8">
              <input  class="form-control pt-0" id="defaultForm-nric" mdbactive="" type="text">
            </div>
          </div>
          <div  class="form-group row d-flex">
            <p  class="label col-md-4 pt-2">Age</p>
            <div  class="col-md-8">
              <input  class="form-control pt-0" id="defaultForm-age" mdbactive="" type="text">
            </div>
          </div>
          <div  class="form-group row d-flex">
            <p  class="label col-md-4 pt-2">Gender</p>
            <div  class="col-md-8">
              <input  class="form-control pt-0" id="defaultForm-gender" mdbactive="" type="text">
            </div>
          </div>
          <div  class="form-group row d-flex">
            <p  class="label col-md-4 pt-2">Email</p>
            <div  class="col-md-8">
              <input  class="form-control pt-0" id="defaultForm-email" mdbactive="" type="email">
            </div>
          </div>
          <div  class="form-group row d-flex">
            <p  class="label col-md-4 pt-2">Mobile</p>
            <div  class="col-md-8">
              <input  class="form-control pt-0" id="defaultForm-mobile" mdbactive="" type="text">
            </div>
          </div>
          <div  class="form-group row d-flex">
            <p  class="label col-md-4 pt-2">Mobile</p>
            <div  class="col-md-8">
              <input  class="form-control pt-0" id="defaultForm-coursename" mdbactive="" type="text">
            </div>
          </div>
          <div  class="form-group row d-flex">
            <p  class="label col-md-4 pt-2">Company name</p>
            <div  class="col-md-8">
              <input  class="form-control pt-0" id="defaultForm-companyname" mdbactive="" type="text">
            </div>
          </div>
          <div  class="text-center">
            <button [routerLink]="['/trainee/traineelist']" class="btn btn-default waves-light" mdbrippleradius="">Register</button>
            <button [routerLink]="['/attendance/traineeregisterwithattendance']" class="btn btn-success waves-light" mdbrippleradius="">Register with Attendance</button>
          </div>
        </form>

      </div>

    </div>

  </div>
  `,
})
export class registernewtraineepagelist {

}
