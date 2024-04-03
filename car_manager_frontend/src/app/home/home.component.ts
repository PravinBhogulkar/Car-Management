import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'car_manager_front';

  // ELEMENT_DATA = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];

  dataSource: any;
  displayedColumns: string[] = ['_id', 'brand', 'color', 'model'];
  constructor(private appService:AppService, private router:Router) { }

  ngOnInit(){
    // this.dataSource = this.ELEMENT_DATA;
    // this.appService.getAllCarData().subscribe(res=>{
    //   console.log(res);
    // })
  }

  getAllCarData(){
    // this.dataSource = this.appService.getAllCarData();
    // console.log(this.dataSource);
    this.appService.getAllCarData().subscribe(res=>{
      this.dataSource = res
        console.log(res);
       })
  }

getCarData(id){
  // this.appService.getCarData(id).subscribe((resp: any)=>{
  //             console.log(resp);
  //             this.dataSource = [resp]
  //             console.log(this.dataSource);
  //      });

  this.appService.getCarData(id).subscribe(res=>{
    console.log(res);
    this.dataSource = [res]
    console.log(this.dataSource);
});

}

// updateCarData(id){
//   this.appService.updateCarData(id);
// }

openEdit(id: any){
  this.router.navigate(['form/edit'],{queryParams:{id}})
}

deleteCarData(id){
  this.appService.deleteCarData(id).subscribe(res=>{
    console.log(res);
    this.dataSource = [res]
    console.log(this.dataSource);
});;
}

// createCarData(car){
//   this.appService.createCarData(car)
// }
}
