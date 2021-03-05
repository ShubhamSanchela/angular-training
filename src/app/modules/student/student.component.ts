import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { LocaldataService } from 'src/app/services/localdata.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})  
export class StudentComponent implements OnInit {
  p : any
  data: any;

  constructor(private authservice : AuthService) { 
    this.getData();
  }


  getData() {
    this.authservice.getData().subscribe(
      (data) => {
        this.data = data;
        
    console.log(this.data) 
      }
    );

  }

  ngOnInit(): void {

 

    // console.log(this.foodervice.getFoo());

  //   this.registerForm = this.formBuilder.group({
  //     title: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     acceptTerms: [false, Validators.requiredTrue]
  // })
  }

  //     // convenience getter for easy access to form fields
  //     get f() { return this.registerForm.controls; }

      
  //   onSubmit() {
  //     console.log(this.registerForm.value);
  //     this.addUser(this.registerForm.value);
  //     // this.registerForm.reset();
     
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //         return;
  //     }else{
  //        // display form values on success
  //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  //     }
      
  // }

  // onReset() {
  //     this.submitted = false;
  //     this.registerForm.reset();
  // }

  // addUser(user: any){
  //   let users: any[] = [];
  //   if (localStorage.getItem("Users")) {
  //     // users = JSON.parse(localStorage.getItem("Users"));
  //     users = [user, ...users];
  //   }else {
  //     users = [user];
  //   }
  //   localStorage.setItem("Users",JSON.stringify(users));
  // }

}
