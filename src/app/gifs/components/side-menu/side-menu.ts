import { Component, input, output } from '@angular/core';
import { SideMenuHeader } from "../side-menu-header/side-menu-header";
import { SideMenuOptions } from "../side-menu-options/side-menu-options";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [SideMenuHeader, SideMenuOptions, NgClass],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {
  show = input.required<boolean>(); 

  overlay = output<boolean>();

  toggleSidebar() {
       this.overlay.emit(!this.show());
  }
}
