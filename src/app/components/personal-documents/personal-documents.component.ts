import { Component, OnInit } from '@angular/core';
import { HeaderInformation } from 'src/app/reusables/models/generalModels';

@Component({
  selector: 'app-personal-documents',
  templateUrl: './personal-documents.component.html',
  styleUrls: ['./personal-documents.component.scss']
})
export class PersonalDocumentsComponent implements OnInit {
  headerInfo: HeaderInformation = {
    headerText: 'Wallet Account Setup',
    showNotificationBell: false,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
