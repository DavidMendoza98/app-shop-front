import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionServiceService } from 'src/app/global/global-services/encryption-service.service';
import { InventoryService } from '../../inventory.service';

@Component({
  selector: 'app-update-lot',
  templateUrl: './update-lot.component.html',
  styleUrls: ['./update-lot.component.css']
})
export class UpdateLotComponent implements OnInit {


  constructor(private service:InventoryService,
    private route:ActivatedRoute,
    private encrypt:EncryptionServiceService,
    private router:Router) { }
public producto:any;
public id:any;
public id2:any;
public lote:any;
ngOnInit(): void {
const id = this.route.snapshot.queryParamMap.get('idProducto');
const id2 = this.route.snapshot.queryParamMap.get('id');
if (id) this.id = parseInt(this.encrypt.decrypt(id));
if (id2) this.id2 = parseInt(this.encrypt.decrypt(id2));
this.service.getProductbyId(this.id).subscribe((x)=> this.producto = x);
this.service.getLoteById(this.id2).subscribe((x)=> this.lote = x);
}

update(Form:any){
this.service.updateLote(this.id2,Form.cantidad,Form.fecha,Form.precio,this.producto.tienda.id,this.producto.id).subscribe((x)=>{
  this.router.navigate(['../inventory/lots']);
})
}

}
