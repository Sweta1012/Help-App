import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  validationMessages = {
        'firstname': {
          'required': 'Firstname is required!'
        },
        'lastname': {
          'required': 'Lastname is required!'
        },
        'email': {
          'required': 'Email is required!'
        },
        'password': {
          'required': 'Password is required!'
        },
        'confirmpsw': {
          'required': 'Confirm Password is required!'
        },
        'address1': {
          'required': 'Address is required!'
        },
        'city': {
          'required': 'City is required!'
        },
        'state': {
          'required': 'State is required!'
        },
        'zipcode': {
          'required': 'Zipcode is required!'
        }
  };

  formErrors = {
    'firstname': '',
    'lastname': '',
    'email': '',
    'password': '',
    'confirmpsw': '',
    'address1': '',
    'city': '',
    'state': '',
    'zipcode': ''
  };

  constructor(private router: Router, private _http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
        this.registerForm = this.fb.group({
          firstname: ['', Validators.required],
          middlename: [''],
          lastname: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          confirmPsw: ['', Validators.required],
          address1: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          zipcode: ['', Validators.required]
        });
  }

  logValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        if (abstractControl && !abstractControl.valid) {
          const messages = this.validationMessages[key];
          console.log(messages);
          console.log(abstractControl.errors);
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  loadData(): void {
    this.logValidationErrors(this.registerForm);
    console.log(this.formErrors);
  }

  goToLogin(): void {
    this._http.post('http://localhost:3000/savedata/', this.registerForm.value).subscribe((data) => {
      console.log('data sent: ' + data);
    });
    console.log(this.registerForm.value);
    this.router.navigate(['login']);
  }
}
