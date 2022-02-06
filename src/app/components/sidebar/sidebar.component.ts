import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openAndClose(event: Event){
    const li = event.target instanceof HTMLLIElement ? event.target as HTMLLIElement : (event.target as HTMLLIElement).closest('li');
    const parentDiv = li?.closest('div.other_contents') as HTMLDivElement;
    li?.classList.toggle('open');
    parentDiv.classList.toggle('elongate');
  }

}
