import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  })
  }

      // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; }

      
    onSubmit() {
      console.log(this.registerForm.value);
      this.addUser(this.registerForm.value);
      // this.registerForm.reset();
     
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }else{
         // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      }
      
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
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
