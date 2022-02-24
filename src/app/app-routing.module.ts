import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonalDocumentsComponent } from './components/personal-documents/personal-documents.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'personal-documents', component: PersonalDocumentsComponent},
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
