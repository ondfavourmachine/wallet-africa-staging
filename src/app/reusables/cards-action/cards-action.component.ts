import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardAction } from '../models/generalModels';

@Component({
  selector: 'app-cards-action',
  templateUrl: './cards-action.component.html',
  styleUrls: ['./cards-action.component.scss']
})
export class CardsActionComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)public data: {cardAction: CardAction}
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    // this.
  }

}
