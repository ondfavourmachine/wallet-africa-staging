import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from 'src/app/components/onboarding/onboarding.component';
import { BusinessOnboardingHomeComponent } from 'src/app/components/business-onboarding-home/business-onboarding-home.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  // { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: '', component: BusinessOnboardingHomeComponent,
    children: [
      { path: '', redirectTo: 'business-type-preview', pathMatch: 'full'},
      { path: 'business-type-preview', component: OnboardingComponent},
      // { path: 'wallets', component: WalletsSingleBulkComponent},
      // { path: 'buy_airtime', component: AirtimeComponent},
      // { path: 'transfer-to-business', component: TransferToBusinessComponent},
      // { path: 'bank-account-single', component: WalletsComponent},
      // { path: 'mobile-money', component: MobileMoneyComponent},
      // { path: 'cards', component: CardsComponent},
      // {path: 'settings', component: SettingsComponent},
      // { path: 'cards/overview', component: CardsOverviewComponent},
     ]
  },
];

@NgModule({
  declarations: [
    OnboardingComponent,
    BusinessOnboardingHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OnboardingModule { }
