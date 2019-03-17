import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ?
    value.filter((item, index) => {
      if (item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1){
        return true;
      }
    })
    : value;
  }

}
