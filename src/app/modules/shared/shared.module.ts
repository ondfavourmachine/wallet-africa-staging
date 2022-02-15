import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizeTransactionComponent } from '../../reusables/authorize-transaction/authorize-transaction.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TransferSuccessfullComponent } from '../../components/transfer-successfull/transfer-successfull.component';
import { CreateACardComponent } from '../../components/create-a-card/create-a-card.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    AuthorizeTransactionComponent,
    TransferSuccessfullComponent,
    CreateACardComponent
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
    TransferSuccessfullComponent,
    CreateACardComponent,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    HeaderComponent,
    MatDialogModule
    
  ]
})
export class SharedModule { }
