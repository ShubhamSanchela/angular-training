import { Component } from '@angular/core';
import { Validators, FormControl,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.css']
})
export class EmailValidationComponent  {


  // _FormBuilder: FormBuilder = new FormBuilder;
 

  // loginForm = this.email.FormGroup({
  //   email : new FormControl("", Validators.required),
  //   password : new FormControl("")
  // })

  // get email(){return this.loginForm.get("email")}

  // ngOnInit(): void {
  //      // Create the form
  //      this.forgotPasswordForm = this._formBuilder.group({
  //       email: ['', [Validators.required, Validators.email]]
  //   });
  // }

}
