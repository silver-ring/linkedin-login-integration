import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService} from './config.service'
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     if (this.authService.loggedIn()) {
       console.log('true');
       this.router.navigateByUrl('/admin');
       return true;
     } else {
       console.log('false');
       this.router.navigateByUrl('/login');
       return false;
     }
  }
}
