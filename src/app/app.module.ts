import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiService } from './services/api';


//pages
import { mainpagelist } from './pages/others/mainpage';
import { navbarheader } from './pages/others/nav.page';
import { loginpagelist } from './pages/others/login.page';
import { trainerloginpagelist } from './pages/others/trainerlogin.page';
import { traineeloginpagelist } from './pages/others/traineelogin.page';

//Dashboard
import { admindashboardlistpage } from './pages/dashboard/admin.dashboard.page';
import { trainerdashboardlistpage } from './pages/dashboard/trainer.dashboard.page';
import { studentdashboardlistpage } from './pages/dashboard/student.dashboard.page';

// Course Details                                                                                                                                                                                                                                                                                                                                                                                                                                     ls
import { coursecreatelistpage } from './pages/management/course/createcourse.page';
import { coursedetailslistpage } from './pages/management/course/coursedetails.page';


// Attendance
import { trainerattendancelistpage } from './pages/attendance/trainer.attendancelist.page';
import { trainerregisterwithattendancelistpage } from './pages/attendance/trainer.registerwithattendance.page';

//Registration

import { usercreatelistpage } from './pages/management/usercreate/usercreate.page';
import { userlistdetailspage } from './pages/management/usercreate/userdetails.page';
import { userlistprofilepage } from './pages/management/usercreate/userprofile.page';

import { traineelistpage } from './pages/trainer/traineealllist.page';
import { registernewtraineepagelist } from './pages/registration/register.newtrainee';

const appRoutes: Routes = [


  { path: 'main', component:mainpagelist },
  { path: 'login', component:loginpagelist },

 { path: 'trainer/login', component:trainerloginpagelist },
 { path: 'trainee/login', component:traineeloginpagelist },

 { path: 'admin/dashboard', component:admindashboardlistpage },
 { path: 'trainer/dashboard', component:trainerdashboardlistpage },
 { path: 'trainee/dashboard', component:studentdashboardlistpage },


 { path: 'course/newcourse', component:coursecreatelistpage },
 { path: 'course/courseDetails', component:coursedetailslistpage },



 // Management
 { path: 'createuser/newuser', component:usercreatelistpage },
 { path: 'userdetails/userdetails', component:userlistdetailspage },
 { path: 'userprofile/userprofile', component:userlistprofilepage },

 //  { path: '', component:  },
 { path: 'trainee/traineelist', component: traineelistpage },
 { path: 'trainee/createtrainee', component: registernewtraineepagelist },
 { path: 'attendance/traineeattendance', component:trainerattendancelistpage },
 { path: 'attendance/traineeregisterwithattendance', component:trainerregisterwithattendancelistpage },
// { path: 'user/userlist', component: userspagelist },

    { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot( appRoutes,
      { enableTracing: false, useHash:false} // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent,
    mainpagelist, navbarheader,loginpagelist,traineeloginpagelist, trainerloginpagelist,
    usercreatelistpage,userlistdetailspage,userlistprofilepage,
    coursecreatelistpage,coursedetailslistpage,
    admindashboardlistpage, trainerdashboardlistpage, studentdashboardlistpage,
    trainerattendancelistpage, trainerregisterwithattendancelistpage,
    traineelistpage, registernewtraineepagelist
  ],

  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
