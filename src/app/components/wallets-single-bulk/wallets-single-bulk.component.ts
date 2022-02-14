import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizeTransactionComponent } from 'src/app/reusables/authorize-transaction/authorize-transaction.component';
import { TransferSuccessfullComponent } from '../transfer-successfull/transfer-successfull.component';

@Component({
  selector: 'app-wallets-single-bulk',
  templateUrl: './wallets-single-bulk.component.html',
  styleUrls: ['./wallets-single-bulk.component.scss']
})
export class WalletsSingleBulkComponent implements OnInit {
  stage: number = 1;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  authorizeTransaction(){
    const dialog = this.dialog.open(AuthorizeTransactionComponent, {
      width: '30vw',
      height: '42vh',
      panelClass: 'authorize_transaction',
      data: { extraCompToDisplay: TransferSuccessfullComponent.name }
    });
  }


}
