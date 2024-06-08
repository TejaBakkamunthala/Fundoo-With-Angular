import { Injectable } from '@angular/core';
import { AuthService } from '../Services/auth/auth.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

// export const authguardGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})

export class authguardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {} 
  
  canActivate(): boolean {
    if (!this.authService.getToken()) {
      this.router.navigateByUrl("/login");
     
    }
    return this.authService.getToken(); 
}
}