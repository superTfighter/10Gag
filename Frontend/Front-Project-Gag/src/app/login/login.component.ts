import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginReponse } from '../login-reponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userModel = new User();
  public loggedIn: boolean = false;

  private http: HttpClient;
  private router: Router;
  private now: Date;

  constructor(http: HttpClient, route: ActivatedRoute, router: Router) {

    this.now = new Date();
    this.http = http;
    this.router = router;
    this.userModel.userName = "";
    this.userModel.password = "";

    if (sessionStorage.getItem("token") != null) {

      this.loggedIn = true;

      if (new Date(sessionStorage.getItem("token_expiration")) < this.now) {
        sessionStorage.removeItem('token');
        this.loggedIn = false;
      }
    } else {

      this.loggedIn = false;
    }

  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.userModel.userName != "" && this.userModel.password != "") {

      //POST TO SERVER
      this.http.put<LoginReponse>("https://localhost:7766/auth", this.userModel).subscribe(response => {

        console.log(response);
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("token_expiration", response.expiration);

        this.router.navigate(['/']);

      }, error => {
        alert("Login failed");
      });

    }
    else {
      alert("ERROR");
    }

  }
}