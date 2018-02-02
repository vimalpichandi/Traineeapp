
import { Component } from '@angular/core';

@Component({
  selector: 'admindashboardpage',
  template: `

    <navbarheader></navbarheader>
    <section>
    <div class="row">
  <!--Panel-->
  <div class="col-xl-12 col-md-6 mb-r">

  <div class="card text-center">
      <div class="card-header default-color white-text">
          Your Name

      </div>
      <div class="card-body">
          <h4 class="card-title">Special title treatment</h4>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a class="btn btn-success btn-sm">Go somewhere</a>
      </div>
      <div class="card-footer text-muted default-color white-text">
          <p class="mb-0">2 days ago</p>
      </div>
  </div>
  </div>
  </div>
  <!--Panel-->
  <div class="row">

  <div class="col-xl-12 col-md-6 mb-r">
  <div class="row">

  <div class="col-xl-3 col-md-6 mb-r">
  <!--Registration-->
  <div class="card card-body flex-center">
      <h5>Registration</h5>
      <div class="card-circle" >
      <a [routerLink]="['/createuser/newuser']" >
        <i class="fa fa-user-plus light-blue-text"></i></a>
      </div>
  </div>
  <!--Registration-->
  </div>
  <div class="col-xl-3 col-md-6 mb-r ">
  <!--Attendance-->
  <div class="card card-body flex-center">
      <h5>Attendance</h5>
      <div class="card-circle ">
        <i class="fa fa-user light-blue-text"></i>
      </div>
  </div>
  <!--/.Feedback-->
  </div>
  <div class="col-xl-3 col-md-6 mb-r">
  <!--Feedback-->
  <div class="card card-body flex-center">
      <h5>Feedback</h5>
      <div class="card-circle">
        <i class="fa fa-pencil-square-o light-blue-text"></i>
      </div>
  </div>
  <!--/.Registration-->
  </div>
  <div class="col-xl-3 col-md-6 mb-r">
  <!--Assessment-->
  <div class="card card-body flex-center">
      <h5>Course</h5>
      <div class="card-circle">
      <a [routerLink]="['/course/newcourse']" >
          <i class="fa fa-slideshare light-blue-text"></i></a>
      </div>
  </div>
  <!--/.Assessment-->
  </div>

  </div>
  </div>
  </div>

  </section>


  <section class="mt-lg-5">

      <div class="row">

          <div class="col-xl-3 col-md-3 mb-r">

              <div class="card classic-admin-card primary-color">
                  <div class="card-body">
                      <div class="pull-right">
                          <i class="fa fa-money"></i>
                      </div>
                      <p class="white-text">SALES</p>
                      <h4>
                          <strong>2000$</strong>
                      </h4>
                  </div>
                  <div class="progress">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-3" role="progressbar" style="width: 25%"></div>
                  </div>
                  <div class="card-body">
                      <p>Better than last week (25%)</p>
                  </div>
              </div>

          </div>


          <div class="col-xl-3 col-md-3 mb-r">

              <div class="card classic-admin-card warning-color">
                  <div class="card-body">
                      <div class="pull-right">
                          <i class="fa fa-line-chart"></i>
                      </div>
                      <p>SUBSCRIPTIONS</p>
                      <h4>
                          <strong>200</strong>
                      </h4>
                  </div>
                  <div class="progress">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-3" role="progressbar" style="width: 25%"></div>
                  </div>
                  <div class="card-body">
                      <p>Worse than last week (25%)</p>
                  </div>
              </div>

          </div>


          <div class="col-xl-3 col-md-3 mb-r">

              <div class="card classic-admin-card light-blue lighten-1">
                  <div class="card-body">
                      <div class="pull-right">
                          <i class="fa fa-pie-chart"></i>
                      </div>
                      <p>TRAFFIC</p>
                      <h4>
                          <strong>20000</strong>
                      </h4>
                  </div>
                  <div class="progress">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" class="progress-bar bg grey darken-3" role="progressbar" style="width: 75%"></div>
                  </div>
                  <div class="card-body">
                      <p>Better than last week (75%)</p>
                  </div>
              </div>

          </div>


          <div class="col-xl-3 col-md-3 mb-r">

              <div class="card classic-admin-card red accent-2">
                  <div class="card-body">
                      <div class="pull-right">
                          <i class="fa fa-bar-chart"></i>
                      </div>
                      <p>ORGANIC TRAFFIC</p>
                      <h4>
                          <strong>2000</strong>
                      </h4>
                  </div>
                  <div class="progress">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-3" role="progressbar" style="width: 25%"></div>
                  </div>
                  <div class="card-body">
                      <p>Better than last week (25%)</p>
                  </div>
              </div>

          </div>

      </div>

  </section>




  `,
})

export class admindashboardlistpage {
  title = 'Dashboard Page';
}
