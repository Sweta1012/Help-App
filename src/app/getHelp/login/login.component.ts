import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success = false;
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  goToHome(loginForm: NgForm): void {
    this._authService.login(loginForm);
    console.log(loginForm.value);
  }
}
