import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionServiceService } from 'src/app/global/global-services/encryption-service.service';

@Component({
  selector: 'app-inventory-options',
  templateUrl: './inventory-options.component.html',
  styleUrls: ['./inventory-options.component.css']
})
export class InventoryOptionsComponent implements OnInit {

  constructor(private router:Router,
              private encrypt:EncryptionServiceService) { }

  ngOnInit(): void {
  }
  toVencer(){
    const idCript = this.encrypt.encrypt('vencer');
    this.router.navigate(['inventory/lots'], { queryParams: { flag: idCript }, queryParamsHandling: 'merge' });
  }
  toPoco(){
    const idCript = this.encrypt.encrypt('poco');
    this.router.navigate(['inventory/lots'], { queryParams: { flag: idCript }, queryParamsHandling: 'merge' });
  }

}
