import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let tabsContainer = document.querySelector("#tabs") as HTMLElement;

    let tabTogglers: NodeListOf<HTMLElement> = tabsContainer.querySelectorAll("a");
    console.log(tabTogglers);
    
    tabTogglers.forEach(function(toggler) {
      toggler.addEventListener("click", function(e: Event) {
        e.preventDefault();
        let tabName = this.getAttribute("href");
        let tabContents = document.querySelector("#tab-contents") as HTMLElement;
        for (let i = 0; i < tabContents.children.length; i++) {
          const currentElement = tabTogglers[i] as HTMLElement;
          currentElement?.parentElement?.classList.remove("border-wa-purple-text-color", "border-b",  "-mb-px", "opacity-100");  
          currentElement.classList.remove('selected');
          tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {continue;}
          tabContents.children[i].classList.add("hidden");
        }
        (e.target as any).parentElement.classList.add("border-wa-purple-text-color", "border-b-2", "-mb-px", "opacity-100");
        (e.target as HTMLElement).classList.add("selected");
      });
    });

}

}
