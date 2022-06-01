import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string){
    if(value.length === 0 || filterString === '') {
      return value;
    }

    const lists = [];
    for (const list of value) {
      if(list['name'].toLowerCase().includes(filterString.toLowerCase()) ) {
        lists.push(list);
      }
    }
    return lists;
  }

}
