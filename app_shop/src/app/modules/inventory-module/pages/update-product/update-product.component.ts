import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../inventory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptionServiceService } from '../../../../global/global-services/encryption-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private service:InventoryService, private router:Router, private route:ActivatedRoute, private encrypt:EncryptionServiceService) { }
  public id:number=0;
  public product:any;
  public categorias:any;
  public selectedOption:string = '';
  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) this.id = parseInt(this.encrypt.decrypt(id));
    console.log(this.id);

    this.service.getProductbyId(this.id).subscribe((x)=> {
      this.product = x
      this.selectedOption = this.product.categoria.id;
    });
    this.service.getAllCategories().subscribe((x)=>this.categorias = x);

  }
  actualizar(data:any){
    const nombre = data.nombre === '' ? this.product.nombre : data.nombre;
    const descripcion = data.descripcion === '' ? this.product.descripcion : data.descripcion;
    const codigo = data.codigo === '' ? this.product.codigo : data.codigo;
    console.log(nombre);
    this.service.updateProduct(this.id,nombre,descripcion,codigo,this.selectedOption).subscribe((x)=>{
      console.log(x);
      this.router.navigate(['/inventory/products']);
    })
  }

}
