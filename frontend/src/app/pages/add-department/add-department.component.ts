import { Department } from "./../../models/Department";
import { Component, Input, OnInit } from "@angular/core";
import { DepartmentService } from "src/app/services/department.service";
import Swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-department",
  templateUrl: "./add-department.component.html",
  styleUrls: ["./add-department.component.scss"],
})
export class AddDepartmentComponent implements OnInit {
  isAddMode: boolean = false;
  form!: FormGroup;
  currentDepartment: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input() department: any;
  name: string = "";
  id: string = "";

  ngOnInit() {
    this.getCopyDepartment(this.route.snapshot.paramMap.get('id'));
    this.isAddMode = !this.id;
    this.name = this.department;

    this.form = this.formBuilder.group({ name: ["", Validators.required] });

    if (!this.isAddMode) {
      this.departmentService
        .getDepartmentById(this.id)
        .subscribe((x) => this.form.patchValue(x));
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      this.addDepartment();
    } else {
      this.editDepartment(this.id, this.department);
    }
  }

  getCopyDepartment(id: string | number): void {
    this.departmentService.getDepartmentById(id).subscribe(
      (data) => {
        this.currentDepartment = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addDepartment() {
    var department: any = {
      name: this.name,
    };

    this.departmentService.addDepartment(department).subscribe((res) => {
      this.currentDepartment = res;
      console.log(res);
    },
    (error) => {
      console.log(error);
    });

    if (this.name != "") {
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
        title: "Departamento adicionado.",
      });

      this.name = "";
    } else {
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
        title: "Nome do departamento não definido.",
      });
    }
  }

  editDepartment(id: any, department: any) {
    var department: any = {
      id: this.currentDepartment.id,
      name: this.currentDepartment.name,
    };

    this.departmentService
      .updateDepartment(this.currentDepartment.id, department)
      .subscribe((res) => {
        if (this.name != "") {
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
            title: "Departamento alterado.",
          });

          this.name = "";
        } else {
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
            title: "Nome do departamento não definido.",
          });
        }
      });
  }
}
