import { Employee } from 'src/app/models/Employee';
import { Department } from './Department';

export class Suggestion {
  id?: Number;
  title!: String;
  description!: String;
  department!: Department;
  employee!: Employee;
}
