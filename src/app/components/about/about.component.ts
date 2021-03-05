import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { LocaldataService } from 'src/app/services/localdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageTitle : string = "Services(local data) in Angular!";
  userss: any[] = [];

  constructor(private localdataService : LocaldataService, private foodervice : FoodService) { }

  ngOnInit(): void {
    this.userss = this.localdataService.getAllUsers();
    console.log(this.foodervice.getFoo());
  }

  // Bottom Table Starts

  // newUserName : any = '';

  // users = [
  //   {
  //     id : 1,
  //     age : 25,
  //     name : "Shubham"
  //   },
  //   {
  //     id : 2,
  //     age : 15,
  //     name : "Vishal"
  //   },
  //   {
  //     id : 3,
  //     age : 35,
  //     name : "Akash"
  //   },
  // ]

  // removeUser(id : any): void{
  //   this.users = this.users.filter(user => user.id !== id)
  //   // console.log('removeUser',id);
  // }

  // setNewUserName(userName : any): void{
  //   this.newUserName = userName;
  //   // console.log('setNewUserName', userName);
  // }

  // addUser(): void{
  //   const uniqueId : any = Math.random().toString(16);
  //   const randomage : any = Math.floor(Math.random() * Math.floor(60));
  //   console.log(randomage)
  //   const newUser = {
  //     id : uniqueId,
  //     name : this.newUserName,
  //     age : randomage
  //   }
  //   this.users.push(newUser);
  //   this.newUserName = "";
  //   // console.log('addUser', this.newUserName);
  // }

  // Bottom Table Ends

}
