import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { Storage } from 'src/app/global/global-services/local_storage.service';
declare var $:any;
declare var iziToast:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public admin = {
    email :'',
    password: ''
  }
  private user : any;
  
  constructor(private service:AuthService,
              private router:Router,
              private storage:Storage) { }
  ngOnInit(): void {
  }
  redirect(){setTimeout(() => {
    this.router.navigate(['inventory']);
  }, 1000);
    
  }
  login(loginForm:any){
    if(loginForm.valid){
      let email = loginForm.value.email;
      let password = loginForm.value.password;
      if(email == '' || password == ''){
        iziToast.show({
          title: 'ERROR DATA',
          icon:'warning',
          class:'iziToast-danger',
          position: 'topRight',
          message: 'Todos los campos son requeridos, vuelva a intentar.',
          progressBarColor: 'red'
        });
      } else{
        this.service.login(email,password).subscribe((x:any) => {
          console.log(x);
          this.user = x;
          this.storage.create_storage("user",JSON.stringify(x.user));
          this.storage.create_storage("token",x.token);
          this.redirect();
        })
      }
  }

}
}