import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot,UrlTree } from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';



@Injectable({
  providedIn:'root'
})

export class AuthGaurd implements CanActivate {
  constructor(private _Router:Router){}
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('userToken')!==null)
      {
        return true
      }
      else
      {
        this._Router.navigate(['/login'])
        return false
      }
  }
};

