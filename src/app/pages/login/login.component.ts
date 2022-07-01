import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import IuserLogin from 'src/app/interfaces/Iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  loginForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  })
  constructor() { }

  ngOnInit(): void {
  }

  submitForm = async (event: Event) => {
    event.preventDefault();
    const apiUrl = environment.apiURL;

    const user:IuserLogin = {
      email: this.email.value,
      password: this.password.value
    }
    
  }

}
