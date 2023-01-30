import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from '../_interfaces/authenticated-response.model';
import { LoginModel } from '../_interfaces/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin!: boolean;
  credentials: LoginModel = {username:'', password:''};
  userRole!: string;
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  login = ( form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>("https://localhost:44347/api/Auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;

          //parse jwt token
          let jwtData = token.split('.')[1]
          let decodedJwtJsonData = window.atob(jwtData)
          this.userRole= JSON.parse(decodedJwtJsonData)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
          console.log(this.userRole)
        
          
          //done with jwt parsing
         // this.redirect.emit(this.userRole);
         localStorage.setItem("role", this.userRole); 
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.router.navigate(["/"+this.userRole+"/dashboard"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }

}
