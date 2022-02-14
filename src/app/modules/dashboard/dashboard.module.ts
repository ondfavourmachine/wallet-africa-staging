import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '../../components/overview/overview.component';
import { WalletsComponent } from 'src/app/components/wallets/wallets.component';
import { TransferToBusinessComponent } from 'src/app/components/transfer-to-business/transfer-to-business.component';
import { WalletsSingleBulkComponent } from '../../components/wallets-single-bulk/wallets-single-bulk.component';
import { AirtimeComponent } from 'src/app/components/airtime/airtime.component';

const routes: Routes = [
  // { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full'},
      { path: 'overview', component: OverviewComponent,  },
      { path: 'wallets', component: WalletsSingleBulkComponent},
      { path: 'buy_airtime', component: AirtimeComponent},
      { path: 'transfer-to-business', component: TransferToBusinessComponent},
      { path: 'bank-account-single', component: WalletsComponent}
     ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    WalletsComponent,
    TransferToBusinessComponent,
    WalletsSingleBulkComponent,
    AirtimeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
