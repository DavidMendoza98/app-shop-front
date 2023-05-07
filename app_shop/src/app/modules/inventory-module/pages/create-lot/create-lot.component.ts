import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../inventory.service';
import { ActivatedRoute } from '@angular/router';
import { EncryptionServiceService } from 'src/app/global/global-services/encryption-service.service';

@Component({
  selector: 'app-create-lot',
  templateUrl: './create-lot.component.html',
  styleUrls: ['./create-lot.component.css']
})
export class CreateLotComponent implements OnInit {

  constructor(private service:InventoryService,
              private route:ActivatedRoute,
              private encrypt:EncryptionServiceService) { }
  public producto:any;
  public id:any;
  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) this.id = parseInt(this.encrypt.decrypt(id));
    this.service.getProductbyId(this.id).subscribe((x)=> this.producto = x);
  }

  create(Form:any){
    console.log(Form.cantidad)
    this.service.createLote(Form.cantidad,Form.fecha,Form.precio,this.producto.tienda.id,this.producto.id).subscribe((x)=>{

    })
  }

}
