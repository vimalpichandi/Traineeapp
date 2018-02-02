
import { Component } from '@angular/core';

@Component({
  selector: 'trainerattendancepage',
  template: `

      <navbarheader></navbarheader>


      <div  class="col-lg-8 col-md-12">

          <div  class="card card-cascade narrower">

            <div  class="view gradient-card-header default-color">
              <h4  class="h4-responsive">New Trainee</h4>
            </div>


            <div  class="card-body ">

              <form  novalidate="" class="ng-untouched ng-pristine ng-valid">
                <div  class="form-group row d-flex">
                  <p  class="label col-md-4 pt-2">Student Name</p>
                  <div  class="col-md-8">
                    <input  class="form-control pt-0" id="defaultForm-atttendancename" mdbactive="" type="text">
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
                  <p  class="label col-md-4 pt-2">Mobile</p>
                  <div  class="col-md-8">
                    <input  class="form-control pt-0" id="defaultForm-mobile" mdbactive="" type="text">
                  </div>
                </div>
                <div  class="form-group row d-flex">
                  <p  class="label col-md-4 pt-2">Course Name</p>
                  <div  class="col-md-8">
                     WSH L1
                  </div>
                </div>
                <div  class="form-group row d-flex">
                  <p  class="label col-md-4 pt-2">Company Name</p>
                  <div  class="col-md-8">
                     Cleaning Express
                  </div>
                </div>
                <div  class="form-group row d-flex">
                  <p  class="label col-md-4 pt-2">Adult Educator</p>
                  <div  class="col-md-8">
                     Tha CheeTenog
                  </div>
                </div>

                <div  class="text-center">
                  <button [routerLink]="['/trainee/dashboard']" class="btn btn-success waves-light" mdbrippleradius="">Done</button>
                </div>
              </form>

            </div>

          </div>

        </div>


  `,
})

export class trainerattendancelistpage {
  title = 'Trainee Attendance Page';
}
