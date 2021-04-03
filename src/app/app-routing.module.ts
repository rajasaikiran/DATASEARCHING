import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarrersComponent } from './carrers/carrers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { RoutingGuard} from './routing.guard'



const routes: Routes = [
    
  {path:"home", component:HomeComponent},
  
  {path:"aboutus",component:AboutusComponent, canActivate: [RoutingGuard]},
  {path:"contactus", component:ContactusComponent , canActivate: [RoutingGuard]},
  {path:"carrers", component:CarrersComponent ,canActivate: [RoutingGuard]},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path:"**", component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
