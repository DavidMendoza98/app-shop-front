import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../inventory.service';
@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  constructor(private service:InventoryService) { }
  public view:string = 'all';
  public categoria:any;
  public categorias:any;
  ngOnInit(): void {

    this.initData()
    
  }
  initData(){
    this.service.getAllCategories().subscribe((x) => this.categorias = x);
  }
  toUpdate(categoria:any){
    this.categoria = categoria;
    console.log(categoria);
    this.view ='update';
  }
  toCreate(){
    this.view ='create';
  }
  toDelete(id:number){
    this.service.deleteCategoria(id).subscribe((x)=>this.ngOnInit())
  }
  toList(){
    this.view ='all';
  }
  crear(form:any){
    this.service.createCategoria(form.nombre).subscribe((x)=>{this.ngOnInit()})
    this.view ='all';
  }
  actualizar(form:any){
    this.service.updateCategoria(this.categoria.id,form.nombre).subscribe((x)=>{this.ngOnInit()})
    this.view ='all';
  }

}
