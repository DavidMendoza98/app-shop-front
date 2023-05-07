import { Component, OnDestroy, OnInit } from '@angular/core';
import { InventoryService } from '../../inventory.service';
import { Subscription } from 'rxjs';
import { EncryptionServiceService } from 'src/app/global/global-services/encryption-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {

  constructor(private service:InventoryService, private encrypt:EncryptionServiceService, private router:Router) { }
  categorias:any;
  productos:any;
  busqueda:string='';
  selectedOption:string='all';
  subs_categorias:Subscription | any;
  ngOnInit(): void {
    this.initData()
  }
  ngOnDestroy(): void {
    //this.subs_categorias.unsubscribe();
  }
  async initData(){
    this.service.getAllCategories().subscribe((x) => this.categorias = x);
    this.service.getAllProducts().subscribe((x) => this.productos = x);
  }
  toDetail(id:string){
    const idCript = this.encrypt.encrypt(id);
    this.router.navigate(['inventory/products/detail'], { queryParams: { id: idCript }, queryParamsHandling: 'merge' });
    // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //   this.router.navigate(['/detail'], { queryParams: { view: idCript }, queryParamsHandling: 'merge' });
    // });
  }
  }

