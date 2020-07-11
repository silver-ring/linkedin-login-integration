import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService} from './config.service'
 
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private configService: ConfigService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     if (this.configService.loggedIn()) {
       console.log('true');
       return true;
       this.router.navigateByUrl('/admin');
     } else {
       console.log('false');
       localStorage.removeItem('token');
       
       this.router.navigateByUrl('/login');
       return false;
     }
  }
}
