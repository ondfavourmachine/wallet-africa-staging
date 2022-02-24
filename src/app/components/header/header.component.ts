import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeaderInformation } from 'src/app/reusables/models/generalModels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input('headerInfo')HeaderInfo: Partial<HeaderInformation>;
  constructor() { 
    this.HeaderInfo = {};
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.HeaderInfo);
  }

  ngOnInit(): void {
  }


  toggle(event: Event){
    const actualDropDown = (event.target as HTMLElement).querySelector('.actual_dropdown') as HTMLElement;
    actualDropDown.classList.toggle('show');
  }
}
