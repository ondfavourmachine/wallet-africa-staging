import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '../../components/overview/overview.component';

const routes: Routes = [
  // { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full'},
      { path: 'overview', component: OverviewComponent,  }
     ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
