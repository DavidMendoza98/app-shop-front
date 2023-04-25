import { Component, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
  }
  login(loginForm:any){
    if(loginForm.valid){
      console.log("sas")
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
      }
  }

}
}