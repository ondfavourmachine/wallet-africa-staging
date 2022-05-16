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
import { CardsActionComponent } from '../../reusables/cards-action/cards-action.component';
import { SidebarDirective } from 'src/app/directives/sideBar/sidebar.directive';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    SidebarDirective,
    SidebarComponent,
    HeaderComponent,
    AuthorizeTransactionComponent,
    TransferSuccessfullComponent,
    CreateACardComponent,
    CardsActionComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    AuthorizeTransactionComponent,
    TransferSuccessfullComponent,
    CardsActionComponent,
    CreateACardComponent,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    HeaderComponent,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule
    
  ]
})
export class SharedModule { }
