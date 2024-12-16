import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './tpcv/cv/cv.component';
import { ListeComponent } from './tpcv/liste/liste.component';
import { ItemComponent } from './tpcv/item/item.component';
import { DetailComponent } from './tpcv/detail/detail.component';
import { DefaultImagePipe } from './default-image.pipe';
import { EmbaucheComponent } from './tpcv/embauche/embauche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ROUTING} from "./app.routing";

import { ToastrModule } from 'ngx-toastr';
import { ColorComponent } from './color/color.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './tpcv/details/details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    ColorComponent,
    NavbarComponent,
    DetailsComponent,
    LoginComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // Ajoutez ce module pour les animations de toast
    ToastrModule.forRoot(),    // Configurez ngx-toastr
    ROUTING,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
