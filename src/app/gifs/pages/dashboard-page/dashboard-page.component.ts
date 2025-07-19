import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideMenu } from "../../components/side-menu/side-menu";


@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {

  showSidebar = signal<boolean>(false);

  toggleSidebar() {
    this.showSidebar.update(value => !value);
  }
 }
