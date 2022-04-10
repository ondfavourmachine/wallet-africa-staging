import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizeTransactionComponent } from 'src/app/reusables/authorize-transaction/authorize-transaction.component';
import { TransferSuccessfullComponent } from '../transfer-successfull/transfer-successfull.component';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.scss']
})
export class AirtimeComponent implements OnInit {
  stage: number =1;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }


  authorizeTransaction(){
    const dialog = this.dialog.open(AuthorizeTransactionComponent, {
      // width: '30vw',
      // height: '42vh',
      panelClass: 'authorize_transaction',
      data: { extraCompToDisplay: TransferSuccessfullComponent.name }
    });
  }

}
