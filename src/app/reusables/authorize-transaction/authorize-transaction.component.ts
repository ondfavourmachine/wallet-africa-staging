import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransferSuccessfullComponent } from 'src/app/components/transfer-successfull/transfer-successfull.component';

@Component({
  selector: 'app-authorize-transaction',
  templateUrl: './authorize-transaction.component.html',
  styleUrls: ['./authorize-transaction.component.scss']
})
export class AuthorizeTransactionComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {extraCompToDisplay: string},
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  showTransferSuccessful(){
    if(this.data && this.data.extraCompToDisplay == 'TransferSuccessfullComponent' ){
      const dialog = this.dialog.open(TransferSuccessfullComponent, {
        width: '30vw',
        height: '70vh',
        panelClass: 'TransferSuccessFul'
      })
    }
    
  }

}
