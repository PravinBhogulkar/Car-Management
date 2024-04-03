import { environment } from './../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  endpoint = environment.apiEndPoint
  constructor(private http:HttpClient) { }

  createCarData(data){
    console.log(data);
    // console.log(typeof(data));

     return this.http.post(this.endpoint+'car',data)
  }

  updateCarData(id,data){
    return this.http.patch(`${this.endpoint}car/${id}`, data)
  }

  getAllCarData(){
    return this.http.get(this.endpoint+'car')
  }

  getCarData(id){
    console.log(id)
    // const a = this.http.get(this.endpoint+'car', id)

    // const a = this.http.get(`${this.endpoint}car/${id}`)
    // console.log(a);
    return this.http.get(`${this.endpoint}car/${id}`);
  }

  deleteCarData(id){
    return this.http.delete(`${this.endpoint}car/${id}`)
  }
}
