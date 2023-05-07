import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from 'src/app/global/global-services/local_storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = environment.servidor;
  private token = this.Storage.get_storage('token');
  private headers = {
    'Authorization': "Token "+ this.token
  }

  constructor(private http: HttpClient,
              private Storage:Storage,
              private Router:Router) { }

  login(email: string, password: string) {
    this.Storage.clear();
    let url = 'login/?'+'username='+email+'&password='+password;
    return this.http.get(this.api + url);
  }

  logout(){
    let url = 'logout/'
    console.log(this.token)
    return this.http.post(this.api + url,{},{headers:this.headers});

  }
  verify(permiso?:string){
    let url = 'check/'
    console.log(this.token)
    if((typeof this.token === 'string')){
      return this.http.post(this.api + url,{'permiso':permiso},{headers:this.headers});
    }
    this.Router.navigate(['auth/login']);
    return 
  }
} 
