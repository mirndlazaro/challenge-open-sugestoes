var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app.routing.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"dashboard","pathMatch":"full"},{"path":"","component":"AdminLayoutComponent","children":[{"path":"","loadChildren":"src/app/layouts/admin-layout/admin-layout.module#AdminLayoutModule","children":[{"kind":"module","children":[{"name":"AdminLayoutRoutes","filename":"src/app/layouts/admin-layout/admin-layout.routing.ts","module":"AdminLayoutModule","children":[{"path":"dashboard","component":"DashboardComponent"},{"path":"user-profile","component":"UserProfileComponent"},{"path":"suggestions","component":"SuggestionsComponent"},{"path":"add-suggestion","component":"AddSuggestionComponent"},{"path":"departments","component":"DepartmentsComponent"},{"path":"add-department","component":"AddDepartmentComponent"},{"path":"edit-department/:id","component":"AddDepartmentComponent"}],"kind":"module"}],"module":"AdminLayoutModule"}]}]},{"path":"**","redirectTo":"dashboard"}],"kind":"module"}]}