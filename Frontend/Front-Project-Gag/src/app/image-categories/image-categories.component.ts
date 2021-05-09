import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ImageType } from '../image-type';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-image-categories',
  templateUrl: './image-categories.component.html',
  styleUrls: ['./image-categories.component.css']
})
export class ImageCategoriesComponent implements OnInit {

  public ImageTypes: Array<ImageType>;
  public ImageTypeModel: ImageType;

  private router: Router;
  private token: string;
  private http: HttpClient;
  private now: Date;

  constructor(http: HttpClient, router: Router) {

    this.now = new Date();

    this.router = router;
    this.http = http;
    this.ImageTypes = Array<ImageType>();

    this.ImageTypeModel = new ImageType();
    this.ImageTypeModel.title = "";

    if (sessionStorage.getItem("token") == null) {

      this.router.navigate(['/login']);

    } else {

      if (new Date(sessionStorage.getItem("token_expiration")) > this.now) {

        this.token = sessionStorage.getItem("token");

        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token
        };

        this.http.get<Array<ImageType>>("https://localhost:7766/imagetype", { headers }).subscribe(response => {
          this.ImageTypes = response;
        });

      } else {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);

      }

    }

  }

  ngOnInit(): void {

  }

  onSubmit(): void {

    if (this.ImageTypeModel.title != "") {

      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      };

      //POST TO SERVER
      this.http.post<ImageType>("https://localhost:7766/imagetype", this.ImageTypeModel, { headers }).subscribe(response => {
        this.router.navigate(['/']);
      });
    }
    else {
      alert("ERROR");
    }

  }

  deleteButtonClick(id: string): void {

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    };

    this.http.delete("https://localhost:7766/imagetype/" + id, { headers }).subscribe(response => {
      window.location.reload();

    });

  }

}
