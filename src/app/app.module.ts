import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ListeUniversiteComponent } from './components/liste-universite/liste-universite.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { BelowCarouselComponent } from './components/below-carousel/below-carousel.component';
import { AjoutUniversiteComponent } from './components/ajout-universite/ajout-universite.component';
import { ModifierUniversiteComponent } from './components/modifier-universite/modifier-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailUniversityComponent } from './components/detail-university/detail-university.component';
import { ListeFacComponent } from './components/liste-fac/liste-fac.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    TopBarComponent,
    ListeUniversiteComponent,
    Page404Component,
    HomeComponent,
    LoginComponent,
    RegistreComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    BelowCarouselComponent,
    AjoutUniversiteComponent,
    ModifierUniversiteComponent,
    DetailUniversityComponent,
    ListeFacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
