import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { Storage } from 'src/app/global/global-services/local_storage.service';



@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit{

  constructor(private auth:AuthService,
              private Router:Router,
              private Storage:Storage) { }

  ngOnInit(): void {
    setTimeout(()=>{
      let token = this.Storage.get_storage('token');
      console.log(token)
      if(typeof token !== 'string'){
        this.Router.navigate(['auth/login']);
      }
        this.auth.verify()?.subscribe(
          {
            next: (response) =>{
              this.Router.navigate(['inventory'])
              console.log(response);
            },
            error: (e) =>{
              this.Router.navigate(['auth/login'])
            },
            complete:()=>{
              this.Router.navigate(['inventory'])
            }
          }
        )  
    },1200)
    
  }

}