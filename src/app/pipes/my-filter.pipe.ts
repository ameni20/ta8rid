import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(platsTab: any, term: any): any {
    if (term === undefined) {
      return platsTab;
    }
    return platsTab.filter((obj) => {
      return (obj.name.toLowerCase().includes(term.toLowerCase()) ||
        obj.description.toLowerCase().includes(term.toLowerCase()));
    })
  }

}
