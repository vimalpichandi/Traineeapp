import { Component } from '@angular/core';
//import { StorageService } from './services/storage';
import { FormsModule } from '@angular/forms';
import { ApiService } from './../../../services/api';


@Component({
  selector: 'userdetailspage',
  template: `
  <navbarheader></navbarheader>
<section class="mb-3">
<div class="row">
<div class="col-lg-4 col-md-12 mb-r">
   <div  class="card mt-3 text-center">
      <h3  class="card-header bg-default  white-text">User List</h3>
      <div  class="card-body">
         <div class=" text-center">
            <div class="list-group list-panel" *ngFor="let key of arrayKeys(records)">
               <a class="list-group-item d-flex justify-content-between dark-grey-text" href="#">
               {{records[key].name}}</a>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="col-lg-8 col-md-12 mb-r">
   <div  class="card mt-3 text-center">
      <h3  class="card-header bg-default white-text">user Details</h3>
      <div  class="card-body">
         <div class="card-body text-center">
            <div class="list-group list-panel">
               <form novalidate="" class="ng-untouched ng-pristine ng-valid">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <label for="form21" class="">User Name :</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                           <label for="form22" class="">Email :</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <label for="form21" class="">Mobile :</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                           <label for="form22" class="">Type :</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-4">
                        <div class="md-form">
                           <input class="form-control" id="form11" placeholder="johnDoe78" type="text" disabled="">
                           <label class="active" for="form11">Username (can't be changed)</label>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="md-form">
                           <input class="form-control" id="form12" placeholder="John" type="text">
                           <label class="active" for="form12">First Name</label>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="md-form">
                           <input class="form-control" id="form13" placeholder="Doe" type="text">
                           <label class="active" for="form13">Last Name</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <input class="form-control" id="form21" mdbactive="" placeholder="" type="text">
                           <label for="form21" class="">Address line 1</label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                           <input class="form-control" id="form22" mdbactive="" placeholder="" type="text">
                           <label for="form22" class="">Address line 2</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-4">
                        <div class="md-form">
                           <input class="form-control" id="form31" placeholder="New York" type="text">
                           <label class="active" for="form31">City</label>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="md-form">
                           <input class="form-control" id="form32" placeholder="00432" type="text">
                           <label class="active" for="form32">Postcode</label>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="md-form">
                           <input class="form-control" id="form33" mdbactive="" type="text">
                           <label for="form33" class="">Country</label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-12">
                        <div class="md-form">
                           <textarea class="md-textarea" id="form76" mdbactive="" type="text">Lorem</textarea>
                           <label for="form76" class="active">Bio</label>
                        </div>
                     </div>
                  </div>
                  <div class="text-center">
                     <button class="btn btn-outline-success" mdbrippleradius="" type="button">Update</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
</section>
      `,
    })

    export class userlistdetailspage {
      title = 'User List details';
          records:any;
      constructor(public api:ApiService){
      //  console.log(this.regModel);
      }
      ngOnInit(){
      this.viewuserslist();
    }

    // list Users
    viewuserslist() {
      //console.log("viewuserslist-1");
     this.api.viewUserslist({}).then( (res:any)=>{
     this.records= res;
    })

      }

      arrayKeys(obj:any){
        return Object.keys(obj);
      }
    }
