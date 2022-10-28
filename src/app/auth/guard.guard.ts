import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})

export class GuardGuard implements CanActivate {

  public isAsAccess : boolean = false;

  constructor(private api:ApiService, private router : Router){
    this.api.loginGuard.subscribe(x=>{
      this.isAsAccess = x;
      // alert("back to the safe zone")
      // this.router.navigate(['/'])
      
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean |
      UrlTree> | boolean | UrlTree {
    return true;
  }

}
