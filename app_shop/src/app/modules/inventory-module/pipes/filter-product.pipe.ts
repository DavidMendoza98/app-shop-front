import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any[], busqueda:string,categoria:string): any {
    const result: any[] = []
    value?.forEach((item)=>{
      if (item.nombre.toLowerCase().includes(busqueda.toLowerCase())) result.push(item)
    })
    return result
  }

}
