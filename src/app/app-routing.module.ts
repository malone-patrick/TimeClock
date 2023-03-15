import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSummaryViewComponent } from './admin-summary-view/admin-summary-view.component';
import { EditTimeInfoComponent } from './edit-time-info/edit-time-info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'summary', component: AdminSummaryViewComponent},
  { path: 'time/:employeeId', component: EditTimeInfoComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
