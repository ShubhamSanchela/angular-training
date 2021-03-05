import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServive : AuthService) { }

  canActivate()
    {
      if(this.authServive.isUserLoggedIn()){
        return true;
      }else{
        window.alert("Permission Denied For This Page!!!")
        return false;
      }
  }
  
}
