import { Employee } from "./../../models/Employee";
import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Department } from "src/app/models/Department";
import { DepartmentService } from "src/app/services/department.service";
import { SuggestionService } from "src/app/services/suggestion.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-suggestion",
  templateUrl: "./add-suggestion.component.html",
  styleUrls: ["./add-suggestion.component.scss"],
})
export class AddSuggestionComponent implements OnInit {
  departmentList$: Observable<Department[]>;
  departments: Department[] = [];

  constructor(
    private suggestionService: SuggestionService,
    private departmentService: DepartmentService
  ) {}

  @Input() suggestion: any;
  name: string = "";
  title: string = "";
  description: string = "";
  department: any = "";
  employee: any;
  suggestionAdded: boolean = true;

  ngOnInit() {
    this.departmentList$ = this.departmentService.getDepartments();
    this.title = this.suggestion.title;
    this.description = this.suggestion.description;
    this.department = "";
    this.employee = this.employee;
  }

  addSuggestion() {
    var suggestion = {
      title: this.title,
      description: this.description,
      department: {
        name: this.department,
      },
      employee: {
        name: this.employee,
      },
    };

    this.suggestionService.addSuggestion(suggestion).subscribe((res) => {

      if (this.title == "" || this.title == undefined){
        this.alertWarning("Título da sugestão não foi definido");
        this.suggestionAdded = false;
      }

      if (this.description == "" || this.description == undefined){
        this.alertWarning("Justificativa não foi definida");
        this.suggestionAdded = false;
      }

      if (this.department == "" || this.department == undefined) {
        this.alertWarning("Departamento da sugestão não foi selecionado");
        this.suggestionAdded = false;
      }

      if (this.employee == "" || this.employee == undefined) {
        this.alertWarning("Colaborador não foi definido");
        this.suggestionAdded = false;
      }

      if (this.suggestionAdded) {
        this.alertSuccess("Sugestão adicionada");

        this.title = "";
        this.description = "";
        this.department = "";
        this.employee = "";

        this.ngOnInit();
      }
    });
  }

  alertWarning(alertMessage: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: alertMessage,
    });
  }

  alertSuccess(alertMessage: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: alertMessage,
    });
  }
}
