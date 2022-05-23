import { Suggestion } from './../../../models/Suggestion';
import { Department } from 'src/app/models/Department';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Departments: Department[], department: string, suggestion: Suggestion): Department[] {

    if(!Departments || !department) {
      return Departments;
    }

    return Departments.filter(dep =>
      dep.name.toLocaleLowerCase().includes(suggestion.department.name.toLocaleLowerCase()));
  }

}
