import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private service:InventoryService, private router:Router) { }

  public selectedOption:string = '1';
  public categorias : any;
  ngOnInit(): void {
    this.initData()
  }
  async initData(){
    await this.service.getAllCategories().subscribe((x)=>this.categorias = x);
  }

  crear(data:any){
    console.log(data.descripcion)
    this.service.createProduct(data.nombre,data.descripcion,data.codigo,this.selectedOption).subscribe((x)=>{
      console.log(x);
      this.router.navigate(['/products']);
    })
  }

}
