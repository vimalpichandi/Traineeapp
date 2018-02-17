import { Component } from '@angular/core';
//import { StorageService } from './services/storage';
import { FormsModule } from '@angular/forms';
import { ApiService } from './../../../services/api';

@Component({
  selector: 'userprofilepage',
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

              vimal

              </div>
           </div>
        </div>
     </div>
  </div>
  </div>
  </section>
  `,
})

export class userlistprofilepage {
  title = 'User Profile details';
      public records:any={};

  constructor(public api:ApiService){
  }
  ngOnInit(){
    this.viewuserslist();
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
}
