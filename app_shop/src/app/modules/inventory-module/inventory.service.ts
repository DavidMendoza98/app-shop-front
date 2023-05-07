import { Injectable } from '@angular/core';
import { CallHttpService } from 'src/app/global/global-services/call-http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from 'src/app/global/global-services/local_storage.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private api = environment.servidor
  private token = this.Storage.get_storage('token')
  private headers = {
    'Authorization': "Token "+ this.token
  }
  constructor(private http: HttpClient,
              private Storage:Storage) { }

  getAllCategories(){
    return this.http.get(this.api+'category/',{headers:this.headers});
  }
  getAllProducts(){
    return this.http.get(this.api+'product/',{headers:this.headers});
  }
  getProductbyId(id:number){
    return this.http.get(this.api+'product/'+id.toString()+"/",{headers:this.headers});
  }
  getProductByCodigo(codigo:string){
    return this.http.get(this.api+'product/codigo/?id='+codigo,{headers:this.headers});
  }

  createProduct(nombre:string, descripcion:string,codigo:string,categoria:string){
    const body =
      {
        "nombre":nombre,
        "descripcion":descripcion,
        "codigo":codigo,
        "img_link":"f",
        "tienda":1,
        "categoria":parseInt(categoria),
        "isDelete":0,
        "isPublic":1  
      }
    return this.http.post(this.api+'product/',body,{headers:this.headers});
    
  }
  updateProduct(id:number,nombre:string, descripcion:string,codigo:string,categoria:string){
    const body =
      {
        "nombre":nombre,
        "descripcion":descripcion,
        "codigo":codigo,
        "img_link":"f",
        "tienda":1,
        "categoria":parseInt(categoria),
        "isDelete":0,
        "isPublic":1  
      }
    return this.http.put(this.api+'product/'+id.toString()+"/",body,{headers:this.headers});
    
  }

  deleteProductbyId(id:number){
    return this.http.delete(this.api+'product/'+id.toString()+"/",{headers:this.headers});
  }
  getLotesByProduct(id:number){
    return this.http.get(this.api+'lotByProduct/?id='+id.toString(),{headers:this.headers});
  }
  getLotes(){
    return this.http.get(this.api+'lot/',{headers:this.headers});
  }
  getLoteById(id:number){
    return this.http.get(this.api+'lot/'+id.toString()+"/",{headers:this.headers});
  }
  createLote(cantidad:number,fecha_vencimiento:string, precio:string,idTienda:number,idProducto:number){
    const body =
    {
      "cantidad": cantidad,
      "fecha_vencimiento": fecha_vencimiento,
      "precio": precio,
      "tienda": idTienda,
      "producto": idProducto,
      "isDelete":false,

  }
    return this.http.post(this.api+'lot/',body,{headers:this.headers});
    
  }
  updateLote(id:number,cantidad:number,fecha_vencimiento:string, precio:string,idTienda:number,idProducto:number){
    const body =
    {
      "cantidad": cantidad,
      "fecha_vencimiento": fecha_vencimiento,
      "precio": precio,
      "tienda": idTienda,
      "producto": idProducto,
      "isDelete":false,

  }
    return this.http.put(this.api+'lot/',body,{headers:this.headers});
  }
  deleteLote(id:number){
    return this.http.delete(this.api+'lot/'+id.toString()+"/",{headers:this.headers});
  }

  // ------------- CATEGORIAS --------------
  
  getCategoriabyId(id:number){
    return this.http.get(this.api+'category/'+id.toString()+"/",{headers:this.headers});
  }

  createCategoria(nombre:string){
    const body =
      {
        "categoria":nombre,
        "isDelete":0
      }
    return this.http.post(this.api+'category/',body,{headers:this.headers});
    
  }
  updateCategoria(id:number,nombre:string){
    const body =
      {
        "categoria":nombre,
        "isDelete":0 
      }
    return this.http.put(this.api+'category/'+id.toString()+"/",body,{headers:this.headers});
    
  }

  deleteCategoria(id:number){
    return this.http.delete(this.api+'category/'+id.toString()+"/",{headers:this.headers});
  }

}
