import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { InventoryService } from '../../inventory.service';
import { EncryptionServiceService } from 'src/app/global/global-services/encryption-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private service:InventoryService, private router:Router, private route:ActivatedRoute,private encrypt :EncryptionServiceService) { }

  public id:number = 0;
  public product:any;
  public lotes:any;
  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) this.id = parseInt(this.encrypt.decrypt(id));
    console.log(this.id);
    this.service.getProductbyId(this.id).subscribe((x)=> this.product = x);
    this.service.getLotesByProduct(this.id).subscribe((x:any)=> {this.lotes = x.data
    console.log(x);
    });
  }
  toUpdate(){
    const idCript = this.encrypt.encrypt(this.id);
    this.router.navigate(['inventory/products/update'], { queryParams: { id: idCript }, queryParamsHandling: 'merge' });  
  }
  toDelete(){
    this.service.deleteProductbyId(this.id).subscribe((x)=> {
      console.log('eliminado');
      this.router.navigate(['inventory/products']);
  });
  }
  toLotes(){
    const idCript = this.encrypt.encrypt(this.id);
    this.router.navigate(['inventory/lot/create'], { queryParams: { id: idCript }, queryParamsHandling: 'merge' });  
  }

}
