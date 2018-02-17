import { Injectable } from '@angular/core';
//import {Http, Headers, RequestOptions } from '@angular/http'; //angular 4
import { HttpClient,HttpHeaders } from '@angular/common/http';  // angular 5
import 'rxjs/Rx';

@Injectable()
export class ApiService{

  //public base:string="http://www.myapi.com/v2/";
  public base:string="http://localhost:1028/";

  constructor(public http:HttpClient){

  }
// login page
  login(data:any){
    return this.post('admin/adminlogin',data);
  }
  // register
    register(data:any){
      return this.post('admin/adminregister',data);
    }
    // user list Details
    viewUserslist(data:any){
      return this.post('admin/viewUserslist',data);
    }
    updateUserlist(data:any){
      return this.post('admin/updateUserlist',data);
    }
    updateUserdetails(data:any){
      return this.post('admin/updateUserdetails',data);
    }
    profileUserlist(data:any){
      return this.post('admin/userlistprofile',data);
    }
    deleteUserslist(data:any){
      console.log("API- console");
      return this.post('admin/deleteUserslist',data);
    }

    trainerlists(data:any){
      return this.post('admin/trainerlists',data);
    }


  // New Course
  newCourse(data:any){
    return this.post('admin/newcourse',data);
  }
  viewCourselist(data:any){
    return this.post('admin/viewcourselist',data);
  }

  deleteCourselist(data:any){
    return this.post('admin/deletecourselist',data);
  }

  trainerlogin(data:any){
    return this.post('trainer/trainerlogin',data);
  }
  traineelogin(data:any){
    return this.post('trainee/traineelogin',data);
  }

  post(url:string,params:any){
    var data = JSON.stringify( params );

    /*   angular 4

    let headers = new Headers(
 { 'Content-Type':'application/json'}
 // { 'Content-Type': 'Access-Control-Allow-Headers' }
 // { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
 );
   let options = new RequestOptions({ headers: headers });

*/
// angular 5
//    let headers = new HttpHeaders();
//    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let headers:any = new HttpHeaders(
    {'Content-Type':'application/json; charset=utf-8'}
    );
     return this.http.post(this.base + url , data , headers )
                   .toPromise()
                   .then( )
                   .catch()


  }
  get(){

  }
}
