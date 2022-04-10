import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[Sidebar]'
})
export class SidebarDirective {

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLLIElement){
    // console.log(event);
    const mobileMenuSideBarParent = target?.closest('.mobileMenuSideBar');
    if(mobileMenuSideBarParent){
      mobileMenuSideBarParent.classList.toggle('slide_in');
    }
  }

}
