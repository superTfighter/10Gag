import { Component, OnInit } from '@angular/core';
import { Image } from '../image';
import { ImageType } from '../image-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public imageModel = new Image();
  public imageTypes = Array<ImageType>();

  selectedFile: ImageSnippet;

  private http: HttpClient;
  private router: Router;
  private token: string;
  private now: Date;

  constructor(http: HttpClient, router: Router) {

    this.now = new Date();
    this.http = http;
    this.router = router;

    if (sessionStorage.getItem("token") == null) {

      this.router.navigate(['/login']);

    } else {

      if (new Date(sessionStorage.getItem("token_expiration")) > this.now) {

        this.imageModel.title = "";
        this.imageModel.base64Image = "";
        this.imageModel.imageTypeID = "";

        this.token = sessionStorage.getItem("token");

        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token
        };

        this.http.get<Array<ImageType>>("https://localhost:7766/imagetype", { headers }).subscribe(response => {
          this.imageTypes = response;
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

    if (this.imageModel.title != "" && this.imageModel.base64Image != "" && this.imageModel.imageTypeID != "") {
      this.imageModel.rating = 1;

      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      };

      //POST TO SERVER
      this.http.post<Image>("https://localhost:7766/image", this.imageModel, { headers }).subscribe(response => {
        this.router.navigate(['/']);
      });
    }
    else {
      alert("ERROR");
    }
  }

  processImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageModel.base64Image = this.selectedFile.src;

    });

    reader.readAsDataURL(file);
  }

}
