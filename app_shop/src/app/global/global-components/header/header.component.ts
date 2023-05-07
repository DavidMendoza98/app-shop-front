import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { AuthService } from '../../../modules/auth-module/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public titulo:string=''
  constructor(
    private location: Location,
    private auth:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.titulo === ''){
      this.titulo = 'Alessia Shop'
    }
  }
  back(): void {
    this.location.back()
  }

  logout():void{
    this.auth.logout().subscribe((x)=>{
      console.log(x);
      this.router.navigate(['/']);
    })
  }
}
