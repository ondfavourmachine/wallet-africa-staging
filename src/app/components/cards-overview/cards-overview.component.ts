import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardsActionComponent } from 'src/app/reusables/cards-action/cards-action.component';
import { CardAction } from 'src/app/reusables/models/generalModels';

@Component({
  selector: 'app-cards-overview',
  templateUrl: './cards-overview.component.html',
  styleUrls: ['./cards-overview.component.scss']
})
export class CardsOverviewComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openGeneralCardActions(actions: CardAction){
    const cardAction: CardAction = actions
    const dialog = this.dialog.open(CardsActionComponent, {
      // width: '25vw',
      // height: '40vh',
      panelClass: 'card-actions',
      data: {cardAction}
    })
  }

  toggleCardDetails(){
    const mainContainer = document.querySelector('.main_container');
    const mobileViewContainer = document.querySelector('.cards_display_contents.mobile_view');
    mainContainer?.classList.toggle('show_overlay');
    mobileViewContainer?.classList.toggle('show');
  }

}
