import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  toggle(event: Event){
    const actualDropDown = (event.target as HTMLElement).querySelector('.actual_dropdown') as HTMLElement;
    actualDropDown.classList.toggle('show');
  }
}
