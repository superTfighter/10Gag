import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../image';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public Images: Array<Image>;
  private http: HttpClient;
  private _sanitizer: DomSanitizer;

  private router: Router;


  constructor(http: HttpClient, private sanitizer: DomSanitizer, router: Router) {

    this.router = router;

    if (sessionStorage.getItem("token") == null) {

      this.router.navigate(['/login']);

    } else {

      this._sanitizer = sanitizer;
      this.http = http;


      this.http.get<Array<Image>>("https://localhost:7766/image").subscribe(response => {
        this.Images = response;
      });
    }
  }

  ngOnInit(): void {

  }

  deleteButtonClick(id: string): void {

    this.http.delete("https://localhost:7766/image/" + id).subscribe(response => {
      window.location.reload();

    });

  }

}
