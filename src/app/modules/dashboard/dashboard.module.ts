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
import { MobileMoneyComponent } from '../../components/mobile-money/mobile-money.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { CardsOverviewComponent } from 'src/app/components/cards-overview/cards-overview.component';
import { SettingsComponent } from 'src/app/components/settings/settings/settings.component';

const routes: Routes = [
  // { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full'},
      { path: 'overview', component: OverviewComponent},
      { path: 'wallets', component: WalletsSingleBulkComponent},
      { path: 'buy_airtime', component: AirtimeComponent},
      { path: 'transfer-to-business', component: TransferToBusinessComponent},
      { path: 'bank-account-single', component: WalletsComponent},
      { path: 'mobile-money', component: MobileMoneyComponent},
      { path: 'cards', component: CardsComponent},
      {path: 'settings', component: SettingsComponent}
      { path: 'cards/overview', component: CardsOverviewComponent},
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
    AirtimeComponent,
    MobileMoneyComponent,
    CardsComponent,
    CardsOverviewComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
