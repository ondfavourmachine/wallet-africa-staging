import { Component, OnInit } from '@angular/core';
import { HeaderInformation } from 'src/app/reusables/models/generalModels';

@Component({
  selector: 'app-wallet-setup',
  templateUrl: './wallet-setup.component.html',
  styleUrls: ['./wallet-setup.component.scss']
})
export class WalletSetupComponent implements OnInit {
  headerInfo: HeaderInformation = {
    headerText: 'Wallet Account Set Up',
    showNotificationBell: true,
    color: '#240C40',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
