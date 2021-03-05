import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  constructor() { }

  getAllUsers() {
    return [
      {id:1, name:"Shubham",city:"Akola"},
      {id:2, name:"Akash",city:"Mumbai"},
      {id:3, name:"Bhushan",city:"Delhi"},
      {id:4, name:"Sonu",city:"Surat"},
      {id:5, name:"Sunny",city:"Noida"},
    ]
  }
}
