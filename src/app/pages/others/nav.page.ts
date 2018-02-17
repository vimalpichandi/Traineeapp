import { Component } from '@angular/core';

@Component({
  selector: 'navbarheader',
  template: `

  <!--Double navigation-->
  <header>
      <!-- Sidebar navigation -->
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar bg-default">
       <a class="navbar-brand" href="#">Navbar</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav mr-auto">
               <li class="nav-item active">
                   <a class="nav-link"  [routerLink]="['/admin/dashboard']">Dashboard <span class="sr-only">(current)</span></a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="">Create </a>
               </li>
               <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"[routerLink]="['/user/createuser']">User Mangement
                   </a>
                   <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                       <a class="dropdown-item" href="#">Catergorys</a>
                       <a class="dropdown-item" href="#">Locations</a>
                       <a class="dropdown-item" href="#">Period</a>
                   </div>
               </li>
               <li class="nav-item">
                   <a class="nav-link" [routerLink]="['/course/newcourse']">Course</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link"  [routerLink]="['/element/elementlist']">Feedback</a>
               </li>
               <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reports
                   </a>
                   <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                       <a class="dropdown-item" href="#">Catergorys</a>
                       <a class="dropdown-item" href="#">Locations</a>
                       <a class="dropdown-item" href="#">Period</a>
                   </div>
               </li>
           </ul>
           <ul class="navbar-nav mr-sm-2">
           <li>
               <a href="#">Logout</a>
           </li></ul>

       </div>
    </nav>

<!--/.Double navigation-->
</header>
    `,
  })
  export class navbarheader {
    title = 'app';
  }
