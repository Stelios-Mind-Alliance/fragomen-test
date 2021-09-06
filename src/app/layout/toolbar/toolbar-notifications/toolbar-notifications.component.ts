import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LIST_FADE_ANIMATION } from '../../../../@iams/shared/list.animation';

@Component({
  selector: 'iams-toolbar-notifications',
  templateUrl: './toolbar-notifications.component.html',
  styleUrls: ['./toolbar-notifications.component.scss'],
  animations: [...LIST_FADE_ANIMATION],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarNotificationsComponent implements OnInit {
  notifications: any[];
  isOpen: boolean;

  constructor() {}

  ngOnInit() {
    this.notifications = [
      {
        icon: 'notifications',
        name: 'New Change Notification Form is submitted',
        time: 'few sec ago',
        read: false,
        colorClass: 'primary',
      },
      {
        icon: 'notifications',
        name: 'New Alert created',
        time: '23 min ago',
        read: false,
        colorClass: 'primary',
      },
      {
        icon: 'notifications',
        name: 'Breaking News is pending review',
        time: 'an hour ago',
        read: false,
        colorClass: 'primary',
      },
      {
        icon: 'notifications',
        name: 'New Alert created',
        time: '6 hours ago',
        read: true,
        colorClass: 'primary',
      },
      {
        icon: 'notifications',
        name: 'John added you as friend',
        time: 'yesterday',
        read: true,
        colorClass: '',
      },
    ];
  }

  markAsRead(notification) {
    notification.read = true;
  }

  dismiss(notification, event) {
    event.stopPropagation();
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  markAllAsRead() {
    this.notifications.forEach(notification => (notification.read = true));
  }
}
