import { AppService } from './../app.service';
import { Car } from './car.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  // selector: 'app-createcardata',
  templateUrl: 'createcardata.component.html',
  styleUrls: ['./createcardata.component.css']
})
export class CreatecardataComponent {
// save(_t2: any) {
//   console.log(_t2);

// }
// car: any;
// editing: any;


editing: boolean = false;
car: Car = new Car();
  http: any;
  endpoint: string;
id;
constructor(
            private router: Router,
            private activeRoute: ActivatedRoute,
            private appService:AppService) {

      //   if (this.editing) {
      // this.id = activeRoute.snapshot.params["id"]
    //   //inside Api subscribe assign the response to this.product
    //               Object.assign(this.car)
    //         // repository.getProduct(activeRoute.snapshot.params["id"]));


    //         // repository.getCarData(activeRoute.snapshot.params["id"]));

    // this.appService.updateCarData(this.id,
      // {
      //   brand:this.car.brand,
      //   model: this.car.model,
      //   color: this.car.color
      // }).subscribe((data:any)=>{

      //   console.log(data);

      //   this.router.navigateByUrl("");
      // })

  //  }
}

ngOnInit(){
  this.editing = this.activeRoute.snapshot.params["mode"] == "edit";
  if(this.editing){
    this.activeRoute.queryParams.subscribe(params=>{
      this.id = params['id']

      this.appService.getCarData(this.id).subscribe((res: any)=>{
        this.car.brand = res.brand
        this.car.color = res.color
        this.car.model = res.model
      })
    })
  }
}
save(form: NgForm) {
console.log(form);
console.log(this.car);

  if (this.editing){
    this.appService.updateCarData(this.id,
      {
        brand: this.car.brand,
        model: this.car.model,
        color: this.car.color
      }
        )
        .subscribe(data=>{
        console.log(data);

     })

     this.router.navigateByUrl("");
    // this.http.post(this.endpoint+'car', this.car)
  }
  else{
    this.appService.createCarData(this.car).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("");
    })
  }
  //call post API

    // this.repository.createCarData(this.car);

}

}
