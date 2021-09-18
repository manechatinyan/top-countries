import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], key: string, filterText: string): any {
    if (!items) return null;

    if (!filterText) return items;

    filterText = filterText.toLowerCase();

    return items.filter((item) => {
        return item[key].toLowerCase().includes(filterText);
    });
  }

}
