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

  openAndClose(event: Event, primaryClassName: string){
    // debugger;
    const li = event.target instanceof HTMLLIElement ? event.target as HTMLLIElement : (event.target as HTMLLIElement).closest('li');
    if(li){
      const ulSiblingElement = li.nextElementSibling;
    ulSiblingElement?.classList.toggle('elongate');
    }
    
  }

}
