import { Component, OnInit } from '@angular/core';
import { HeaderInformation } from 'src/app/reusables/models/generalModels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headerInfo: HeaderInformation = {
    headerText: 'Good morning, Oke',
    showNotificationBell: true,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
