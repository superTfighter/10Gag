import { NgModule } from '@angular/core';
import { Routes , RouterModule } from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';



const routes: Routes = [
  { path:'', component: MainPageComponent},
  { path:'login', component: LoginComponent},
  { path: 'upload', component: UploadComponent}

];

@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
