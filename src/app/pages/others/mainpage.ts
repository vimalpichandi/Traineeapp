import { Component } from '@angular/core';

@Component({
  //selector: 'mainpage',
  template: `
  <div class="container">
  <div class="row">
      <div class="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">
      <div class="row">
    <!--Panel-->
    <div class="col-xl-12 col-md-6 mb-r">

    <div class="card text-center">
        <div class="card-header default-color white-text">
            Choose your login

        </div>
        <div class="card-body">
              <button [routerLink]="['/login']" class="btn btn-default waves-effect waves-light">Admin</button>
                <button [routerLink]="['/trainee/login']" class="btn btn-default waves-effect waves-light">Trainee</button>
                  <button [routerLink]="['/trainer/login']" class="btn btn-default waves-effect waves-light">Trainer</button>

        </div>
        <div class="card-footer text-muted default-color white-text">
            <p class="mb-0">by trainingapp</p>
        </div>
    </div>
    </div>
    </div>
    <!--Panel-->

      </div>
      </div>
      </div>




    `,
  })
  export class mainpagelist {

}
