import { map, Observable } from "rxjs";
import { Suggestion } from "./../../models/Suggestion";
import { Component, OnInit } from "@angular/core";
import { SuggestionService } from "src/app/services/suggestion.service";
import { DepartmentService } from "src/app/services/department.service";
import { Department } from "src/app/models/Department";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-suggestions",
  templateUrl: "./suggestions.component.html",
  styleUrls: ["./suggestions.component.scss"],
})
export class SuggestionsComponent implements OnInit {
  [x: string]: any;

  department: any;
  filterDepartment: string;
  searchFilter: any;
  formFilter: FormGroup;
  departmentCopy = []

  constructor(
    private suggestionService: SuggestionService,
    private departmentService: DepartmentService,
    protected formBuilder: FormBuilder
  ) {}

  suggestionList$: Observable<Suggestion[]>;
  departmentList: Department[] = [];
  suggestion$: Observable<Suggestion>;
  department$: Observable<Department>;

  ngOnInit() {
    //.departmentService.getDepartments().subscribe((x) => {this.departmentList = x;});
    this.suggestionList$ = this.suggestionService.getSuggestions();
    this.departmentList$ = this.departmentService.getDepartments();
    this.department = this.department;


    //this.searchFilter;
    //this.formFilter = this.formBuilder.group({});
    //this.formFilter.addControl("name", new FormControl(name, []));
  }

  getFormFiltro(): any {
    return {
      ...this.onPreFormFiltro(this.formFilter.getRawValue()),
      ...this.onTrataData(),
    } as any;
  }

  /*
  pesquisar(model: any) {
    this.suggestionList$ = this.suggestionService.getSuggestions(
      this.getFormFiltro()
    );
  }
  */

  search() {
    if(this.department == ""){
      this.ngOnInit();
    } else {
      this.suggestion = this.department.filter(res => {
        return res.name.toLocaleLowerCase().match(this.department.name.toLocaleLowerCase())
      })
    }
  }
}
