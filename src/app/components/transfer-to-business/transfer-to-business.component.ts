import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizeTransactionComponent } from 'src/app/reusables/authorize-transaction/authorize-transaction.component';

@Component({
  selector: 'app-transfer-to-business',
  templateUrl: './transfer-to-business.component.html',
  styleUrls: ['./transfer-to-business.component.scss']
})
export class TransferToBusinessComponent implements OnInit {
  stage: number = 1;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  authorizeTransaction(){
    const dialog = this.dialog.open(AuthorizeTransactionComponent, {
      width: '38vw',
      height: '42vh',
      panelClass: 'authorize_transaction'
    })
  }

}
