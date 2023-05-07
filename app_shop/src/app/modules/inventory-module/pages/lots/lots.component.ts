import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../inventory.service';
import { EncryptionServiceService } from '../../../../global/global-services/encryption-service.service';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.css']
})
export class LotsComponent implements OnInit {

  constructor(private service:InventoryService,
              private router:Router,
              private route:ActivatedRoute,
              private encrypt: EncryptionServiceService) { }

  public productos:any;
  public categorias:any;
  public lotes:any;
  public busqueda:string='';
  public selectedOption:string='all';
  public title:string = 'Lotes'


  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('flag');
    if (id) {
      this.selectedOption = this.encrypt.decrypt(id);
      if(this.selectedOption === 'vencer')this.title = 'Producto a vencer';
      if(this.selectedOption === 'poco')this.title = 'Poco Inventario';
    };
    this.initData();
  }
  async initData(){
    this.service.getAllCategories().subscribe((x) => this.categorias = x);
    this.service.getAllProducts().subscribe((x) => this.productos = x);
    this.service.getLotes().subscribe((x)=>this.lotes = x);
  }
  toDetail(id:string){
    const idCript = this.encrypt.encrypt(id);
    this.router.navigate(['inventory/lots/detail'], { queryParams: { id: idCript }, queryParamsHandling: 'merge' });
    // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //   this.router.navigate(['/detail'], { queryParams: { view: idCript }, queryParamsHandling: 'merge' });
    // });
  }
  toUpdate(id:string,id2:string){
    const idCript = this.encrypt.encrypt(id);
    const idCript2 = this.encrypt.encrypt(id2);
    this.router.navigate(['../inventory/lot/update'], { queryParams: { id: idCript, idProducto: idCript2}, queryParamsHandling: 'merge' });
  }
  toDelete(id:number){
    this.service.deleteLote(id).subscribe((x)=>{
      this.ngOnInit()
    })
  }

}
