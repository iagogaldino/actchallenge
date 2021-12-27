import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(items: any[], filter?: any): any {
   let arrayFilter = [];
    try {
      if (!items || !filter) { return items; }
      items.forEach(item => {
        if (item['name'].toLowerCase().indexOf(filter.toLowerCase()) !== -1) { arrayFilter.push(item); }
      });
    } catch (e) {
      console.error('Erro', e);
      arrayFilter = items;
    }
    return arrayFilter;
  }

}
