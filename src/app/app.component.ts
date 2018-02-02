import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--Main Layout-->
  <main>
      <div class="container-fluid mt-5">


       <router-outlet></router-outlet>


      </div>
  </main>


   <!--Main layout-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
