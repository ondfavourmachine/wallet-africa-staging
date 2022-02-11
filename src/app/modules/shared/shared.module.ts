import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizeTransactionComponent } from '../../reusables/authorize-transaction/authorize-transaction.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    AuthorizeTransactionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    AuthorizeTransactionComponent,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    HeaderComponent,
    MatDialogModule
    
  ]
})
export class SharedModule { }
