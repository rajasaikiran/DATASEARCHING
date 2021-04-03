import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CarrersComponent } from './carrers/carrers.component';
import { HttpClientModule}from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import  {FormsModule}from '@angular/forms';
import { SortnamePipe } from './sortname.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    PagenotfoundComponent,
    CarrersComponent,
    FooterComponent,
    SortnamePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
