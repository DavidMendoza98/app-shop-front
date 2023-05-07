import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '../global/global-services/local_storage.service';
import { AuthService } from '../modules/auth-module/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router,
              private Storage:Storage) {}
  
  private validador:boolean = false;

  async canActivate(): Promise<any> {
    console.log("guard");
    let token = this.Storage.get_storage('token');
      if(typeof token !== 'string'){
        //this.router.navigate(['auth/login']);
        this.validador = false;
      }else{
      await this.auth.verify()?.subscribe(
          {
            next: (response) =>{
              this.validador = true;
            },
            error: (e) =>{
              this.router.navigate(['auth/login'])
              this.validador = false;
            }
          }
      )
      }
  }
  
}
