import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UtilityServiceService } from 'src/app/services/utility-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup = new FormGroup({})
  constructor(
    private router: Router,
    private auth: AuthServiceService,
    private utilityService: UtilityServiceService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Otp: ['', Validators.required]

    })
  }

  loginUser(){
    const {value} = this.loginForm;
    // this.router.navigate(['/dashboard']);
    this.auth.loginUser(value)
    .subscribe(
      val => {
        console.log(val);
        // if(){}
        this.utilityService.successSnackBar(`Welcome ${value.Email}`, 'close');
      },
      err => {
        console.log(err);
        this.utilityService.errorSnackBar(`${err.error.message}`, 'close');
      }
    )
  }
}
