import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SuggestionsComponent } from '../../pages/suggestions/suggestions.component';
import { DepartmentsComponent } from '../../pages/departments/departments.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AddSuggestionComponent } from '../../pages/add-suggestion/add-suggestion.component';
import { AddDepartmentComponent } from 'src/app/pages/add-department/add-department.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'suggestions', component: SuggestionsComponent },
  { path: 'add-suggestion', component: AddSuggestionComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'edit-department/:id', component: AddDepartmentComponent },
];
