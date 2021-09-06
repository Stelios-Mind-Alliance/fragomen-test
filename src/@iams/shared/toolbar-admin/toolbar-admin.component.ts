import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iams-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  styleUrls: ['./toolbar-admin.component.scss'],
})
export class ToolbarAdminComponent {
  isOpen: boolean;

  constructor() {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}
