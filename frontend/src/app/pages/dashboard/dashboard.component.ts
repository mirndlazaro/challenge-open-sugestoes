import { EmployeeService } from './../../services/employee.service';
import { Suggestion } from './../../models/Suggestion';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/Department';
import { Employee } from 'src/app/models/Employee';
import { DepartmentService } from 'src/app/services/department.service';
import { SuggestionService } from 'src/app/services/suggestion.service';

// core components
import {
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  employeeList: any = this.departmentService.getDepartments();
  departmentList$: any;
  suggestionList$: Observable<Suggestion>[] = [];
  employeeList$: Observable<Suggestion>[] = [];
  assiduousColabsChart: any;

  countDepartments: number;
  countSuggestions: number;
  countEmployees: number;

  constructor(private departmentService : DepartmentService, private suggestionService : SuggestionService, private employeeService: EmployeeService) { }

  ngOnInit() {

    this.departmentService.getDepartments().subscribe(data => {
      console.log(data);
      this.countDepartments = data.length;
    })

    this.employeeService.getEmployee().subscribe(data => {
      console.log(data);
      this.countEmployees = data.length;
    })

    this.suggestionService.getSuggestions().subscribe(data => {
      console.log(data);
      this.countSuggestions = data.length;
    })

    var sugsByDepartmentChart = document.getElementById('chart-orders');

    var sugsByDepartmentChart = new Chart(sugsByDepartmentChart, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var assiduousColabsChart = document.getElementById('chart-sales');

    this.assiduousColabsChart = new Chart(assiduousColabsChart, {
			type: 'pie',
			options: this.employeeList,
			data: {
        datasets: this.employeeList
      }
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
