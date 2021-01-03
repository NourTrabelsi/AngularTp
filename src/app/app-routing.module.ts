import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutUniversiteComponent } from './components/ajout-universite/ajout-universite.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailUniversityComponent } from './components/detail-university/detail-university.component';
import { HomeComponent } from './components/home/home.component';
import { ListeFacComponent } from './components/liste-fac/liste-fac.component';
import { ListeUniversiteComponent } from './components/liste-universite/liste-universite.component';
import { LoginComponent } from './components/login/login.component';
import { ModifierUniversiteComponent } from './components/modifier-universite/modifier-universite.component';
import { Page404Component } from './components/page404/page404.component';
import { RegistreComponent } from './components/registre/registre.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path:"",
    component: HomeComponent
  },

  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"listUniversite",
    component: ListeFacComponent
  },

  {
    path:"register",
    component: RegistreComponent
  },
   

  {
    path:"DetailsUniversite/:id",
    component:DetailUniversityComponent
  },
  

  {
    path:"dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path:"gestionUniversite",
    component: ListeUniversiteComponent,
    canActivate:[AuthGuard]
  },

 
  {
    path:"AjoutUniversite",
    component: AjoutUniversiteComponent,
    canActivate:[AuthGuard]
  },

  {
    path:"ModifierUniversite/:id",
    component: ModifierUniversiteComponent,
    canActivate:[AuthGuard]
  },
 
 

  {
    path: "**",
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
