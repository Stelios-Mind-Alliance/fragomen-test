import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavItem } from 'src/app/layout/sidenav/sidenav-item/sidenav-item.interface';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'iams-alerts-manager',
  templateUrl: './alerts-manager.component.html',
  styleUrls: ['./alerts-manager.component.scss'],
})
export class AlertsManagerComponent implements OnInit {
  input: string;
  focused: boolean;
  isOpen: boolean;

  recentlyVisited: SidenavItem[] = [];

  constructor(private router: Router, private sidenavService: SidenavService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const item = this.sidenavService.getItemByRoute(
          event.urlAfterRedirects
        );

        if (item) {
          const index = this.recentlyVisited.indexOf(item);
          if (index > -1) {
            this.recentlyVisited.splice(index, 1);
          }

          this.recentlyVisited.unshift(item);

          if (this.recentlyVisited.length > 5) {
            this.recentlyVisited.pop();
          }
        }
      }
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  openDropdown() {
    this.focused = true;
  }

  closeDropdown() {
    this.focused = false;
  }
}
