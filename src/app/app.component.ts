import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  togglelinks: Boolean;

  constructor(private _authService: AuthService, private _http: HttpClient) {
   }
    ngOnInit() {
      this._authService.$authObservable.subscribe((data) => {
        this.togglelinks = data;
        console.log(data);
        console.log('togglelinks: ' + this.togglelinks);
      });
    }
    // jwt tokennotexpired
  logout() {
    this._authService.logout();
  }
}
