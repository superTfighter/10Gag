import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../image';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ImageType } from '../image-type';
import { ReplaceSource } from 'webpack-sources';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public Images: Array<Image>;
  public ImageTypes: Array<ImageType>;

  private http: HttpClient;
  private _sanitizer: DomSanitizer;
  private router: Router;
  private token: string;
  private now: Date;

  constructor(http: HttpClient, private sanitizer: DomSanitizer, router: Router) {

    this.now = new Date();
    this.router = router;
    this._sanitizer = sanitizer;
    this.http = http;
    this.Images = Array<Image>();
    this.ImageTypes = Array<ImageType>();

    if (sessionStorage.getItem("token") == null) {

      this.router.navigate(['/login']);

    } else {


      if (new Date(sessionStorage.getItem("token_expiration")) > this.now) {

        this.token = sessionStorage.getItem("token");

        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token
        };

        this.http.get<Array<Image>>("https://localhost:7766/image", { headers }).subscribe(response => {
          this.Images = response;
        });

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

  deleteButtonClick(id: string): void {

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    };

    this.http.delete("https://localhost:7766/image/" + id, { headers }).subscribe(response => {
      window.location.reload();

    });

  }

}
