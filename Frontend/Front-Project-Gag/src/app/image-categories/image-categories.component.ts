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
  public dtOptions: DataTables.Settings = {};

  public ImageTypeModel: ImageType;

  private router: Router;
  private token: string;
  private http: HttpClient;

  constructor(http: HttpClient, router: Router) {

    this.router = router;
    this.http = http;
    this.ImageTypes = Array<ImageType>();

    this.ImageTypeModel = new ImageType();
    this.ImageTypeModel.title = "";

    if (sessionStorage.getItem("token") == null) {

      this.router.navigate(['/login']);

    } else {

      this.token = sessionStorage.getItem("token");

      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      };

      this.http.get<Array<ImageType>>("https://localhost:7766/imagetype", { headers }).subscribe(response => {
        this.ImageTypes = response;
      });

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
