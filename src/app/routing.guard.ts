import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {

  //inject constructor

  constructor(public ls:LoginService) {}
  canActivate(): boolean {
    if(this.ls.loginStatus==true)
    {

      return true;
    }
    else
    {
      alert("unauthorised user not allowed please login")
    }
  }
  
}
