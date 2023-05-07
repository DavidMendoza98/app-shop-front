import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLote'
})
export class FilterLotePipe implements PipeTransform {

  transform(value: any[], busqueda:string,categoria:string): any {
    const result: any[] = []
    value?.forEach((item)=>{
      if(categoria === 'all'){
        if (item.producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ) result.push(item)
      }
      if(categoria === 'vencer'){
        let dias = item.fecha_vencimiento.split('-');
        let fecha = new Date(+dias[0],+dias[1]-1,+dias[2])
        let actual = new Date()
        let diferencia = Math.abs(fecha.getTime() - actual.getTime())
        console.log(diferencia);
        if (item.producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) && diferencia < 2592000000 ) result.push(item)
      }
      if(categoria === 'poco'){
        if (item.producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) && item.cantidad < 12) result.push(item)
      }
    })
    return result
  }

}
