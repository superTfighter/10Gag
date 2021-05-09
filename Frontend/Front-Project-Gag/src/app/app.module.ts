import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ImageCategoriesComponent } from './image-categories/image-categories.component'
import { DataTablesModule } from 'angular-datatables';
import { NgxImageCompressService } from 'ngx-image-compress';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    UploadComponent,
    ImageCategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
