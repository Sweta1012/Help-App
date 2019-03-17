import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $authObservable: Subject<any> = new Subject();

  constructor(private _cookieService: CookieService, private _router: Router, private _http: HttpClient) {
  }

    login(auth_details: NgForm) {
      if (auth_details.valid === true) {
        this._http.post('http://localhost:3000/checkuser/', auth_details.value).subscribe((data: any) => {
          console.log('data sent: ' + data.isLoggedIn);
          if (data.isLoggedIn) {
            this._cookieService.set('token', data.isLoggedIn);
            this.$authObservable.next(data.isLoggedIn);
            this._router.navigate(['home']);
          } else {
            alert('Invalid Email or Password!!');
          }
        });
        console.log(auth_details.value);
      }
    }

    checkUserStats() {
      return this._cookieService.get('token');
    }

    logout() {
      this._cookieService.delete('token');
      this.$authObservable.next(false);
      this._router.navigate(['login']);
    }
}
