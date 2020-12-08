import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SortnamePipe implements PipeTransform {

  transform( MyData:any[], searchTerm:string){
    if(!searchTerm || !MyData)
    {

      return MyData;
    }
    else
    {
      return MyData.filter(userObj=>userObj.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
  }

}
