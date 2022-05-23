import { Department } from './../../models/Department';
import { DepartmentService } from './../../services/department.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departmentsCount: number;

  constructor(private departmentService : DepartmentService) { }

  departmentList$: Observable<Department[]>;
  department$: Observable<Department>;

  @Input() department:any;
  id: number = 0;
  name: string = "";
  modalTitle: string ="";

  ngOnInit() {
    this.departmentList$ = this.departmentService.getDepartments();
  }

  activateDepartmentComponent: boolean = false;

  deleteDepartment(department:any) {
    Swal.fire({
      title: `Tem certeza que deseja excluir o departamento ${department.name}?`,
      text: "Você não poderá reverter isso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletado!',
          'O departamento foi deletado.',
          'success'
        )

        this.departmentService.deleteDepartment(department.id).subscribe(res => {
          console.log(res);
        })

        this.departmentList$ = this.departmentService.getDepartments();
      }
    })
  }

  editDepartment(id: any, department: any) {
    var department: any = {
      id: this.id,
      name: this.name
    }

    this.departmentService.updateDepartment(id, department).subscribe(res => {
    })
  }
}
