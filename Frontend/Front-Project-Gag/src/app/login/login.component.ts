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

  private http: HttpClient;
  private router: Router;

  constructor(http: HttpClient, route: ActivatedRoute, router: Router) {

    this.userModel.userName = "";
    this.userModel.password = "";

    this.http = http;
    this.router = router;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.userModel.userName != "" && this.userModel.password != "") {

      //POST TO SERVER
      this.http.put<LoginReponse>("https://localhost:7766/auth", this.userModel).subscribe(response => {
        sessionStorage.setItem("token", response.token);
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