import { Component, OnInit } from '@angular/core';
import { Validators, FormControl,FormGroup } from '@angular/forms';
import * as alertify from "alertifyjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  get f() { return this.registerForm.controls; }

  loginForm = new FormGroup({
    email : new FormControl("", Validators.required),
    password : new FormControl("")
  })


  userSubmitted: boolean = true;
  user : any = {};

  createForm(){
    
  }

  get email(){return this.loginForm.get("email")}

  constructor() { }

  ngOnInit(): void {
  
  }

  title : any;

  onSubmit(){
    console.log(this.loginForm.value);
    this.userSubmitted = true;
    if (this.registerForm.invalid) {
      return;
  }
    if(this.loginForm.valid){
      this.user = Object.assign(this.user , this.loginForm.value);
      // localStorage.setItem("Users",JSON.stringify(this.user));
      this.addUser(this.user);
      this.loginForm.reset();
      this.userSubmitted = false;
      alertify.success("Success")
    }else {
      alertify.error("Error");
    }

  }

  addUser(user: any){
    let users: any[] = [];
    if (localStorage.getItem("Users")) {
      // users = JSON.parse(localStorage.getItem("Users"));
      users = [user, ...users];
    }else {
      users = [user];
    }
    localStorage.setItem("Users",JSON.stringify(users));
  }

}
