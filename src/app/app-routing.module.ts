import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TableListComponent } from './components/table-list/table-list.component';


const routes: Routes = [
  {path:'home', component:ButtonComponent, pathMatch: 'full'},
  {path:'tablelist', component: TableListComponent},
  {path:'**', pathMatch: 'full', redirectTo:'home'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
