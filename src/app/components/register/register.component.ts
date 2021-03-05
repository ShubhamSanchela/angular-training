import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from "@angular/forms"
import { RestoService } from "src/app/services/resto.service";
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert : boolean = false;
  register = new FormGroup({
    name : new FormControl("", Validators.required),
    email : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
  });

  userSubmitted = true;

  constructor(private resto : RestoService) { }

  ngOnInit(): void {
  }

  collections(){
    console.warn(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((result) => {
      console.warn("result",result);
      window.alert("Show Results in Shubham \ Angular \ db \ db.json");
    });
    this.register.reset();
    this.userSubmitted = false;
  }


}
