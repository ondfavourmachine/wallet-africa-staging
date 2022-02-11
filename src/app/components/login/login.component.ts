import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup = new FormGroup({})
  constructor(
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    })
  }

  loginUser(){
    const {value} = this.loginForm;
    this.router.navigate(['/dashboard']);
  }
}
