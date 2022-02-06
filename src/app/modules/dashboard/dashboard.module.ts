import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '../../components/overview/overview.component';
import { WalletsComponent } from 'src/app/components/wallets/wallets.component';

const routes: Routes = [
  // { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full'},
      { path: 'overview', component: OverviewComponent,  },
      { path: 'wallets', component: WalletsComponent}
     ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    WalletsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
