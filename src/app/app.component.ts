import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { ThemeService } from '../@iams/services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { SplashScreenService } from '../@iams/services/splash-screen.service';

@Component({
  selector: 'iams-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private sidenavService: SidenavService,
    private iconRegistry: MatIconRegistry,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private route: ActivatedRoute,
    private splashScreenService: SplashScreenService
  ) {
    this.route.queryParamMap
      .pipe(filter(queryParamMap => queryParamMap.has('style')))
      .subscribe(queryParamMap =>
        this.themeService.setStyle(queryParamMap.get('style'))
      );

    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.themeService.theme$.subscribe(theme => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.sidenavService.addItems([
      {
        name: 'SUPER ADMIN',
        position: 5,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'User Management',
        routeOrFunction: '/super-admin',
        icon: 'dashboard',
        position: 10,
        pathMatchExact: true,
      },
      {
        name: 'ADMIN',
        position: 15,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'Company Overview',
        routeOrFunction: '/',
        icon: 'insert_drive_file',
        position: 20,
        pathMatchExact: true,
      },
      {
        name: 'User Management',
        routeOrFunction: '/super-admin',
        icon: 'dashboard',
        position: 25,
        pathMatchExact: true,
      },
      {
        name: 'DIRECTOR',
        position: 30,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'Changes',
        routeOrFunction: '/form',
        icon: 'insert_drive_file',
        position: 35,
        pathMatchExact: true,
      },
      {
        name: 'Breaking News',
        routeOrFunction: '/news',
        icon: 'dashboard',
        position: 40,
        pathMatchExact: true,
      },
      {
        name: 'Alerts',
        routeOrFunction: '/alert',
        icon: 'dashboard',
        position: 45,
        pathMatchExact: true,
      },
      {
        name: 'Resources',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 50,
        pathMatchExact: true,
      },
      {
        name: 'Analytics Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 55,
        pathMatchExact: true,
      },

      {
        name: 'ALERTS MANAGER',
        position: 60,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'Changes',
        routeOrFunction: '/form',
        icon: 'insert_drive_file',
        position: 65,
        pathMatchExact: true,
      },
      {
        name: 'Breaking News',
        routeOrFunction: '/news',
        icon: 'dashboard',
        position: 70,
        pathMatchExact: true,
      },
      {
        name: 'Alerts',
        routeOrFunction: '/alert',
        icon: 'dashboard',
        position: 75,
        pathMatchExact: true,
      },
      {
        name: 'Alert Sources',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 80,
        pathMatchExact: true,
      },
      {
        name: 'Resources',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 85,
        pathMatchExact: true,
      },
      {
        name: 'Analytical Questions',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 90,
        pathMatchExact: true,
      },
      {
        name: 'Analytics Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 95,
        pathMatchExact: true,
      },
      {
        name: 'Datasets Management',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 100,
        pathMatchExact: true,
      },

      {
        name: 'REGIONAL MANAGER',
        position: 105,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'Changes',
        routeOrFunction: '/form',
        icon: 'insert_drive_file',
        position: 110,
        pathMatchExact: true,
      },
      {
        name: 'Breaking News',
        routeOrFunction: '/news',
        icon: 'dashboard',
        position: 115,
        pathMatchExact: true,
      },
      {
        name: 'Alerts',
        routeOrFunction: '/alert',
        icon: 'dashboard',
        position: 120,
        pathMatchExact: true,
      },
      {
        name: 'Alert Sources',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 125,
        pathMatchExact: true,
      },
      {
        name: 'Resources',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 130,
        pathMatchExact: true,
      },
      {
        name: 'Analytical Questions',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 135,
        pathMatchExact: true,
      },
      {
        name: 'Analytics Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 140,
        pathMatchExact: true,
      },

      {
        name: 'SME/CSM',
        position: 145,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'Changes',
        routeOrFunction: '/form',
        icon: 'insert_drive_file',
        position: 150,
        pathMatchExact: true,
      },
      {
        name: 'Breaking News',
        routeOrFunction: '/news',
        icon: 'dashboard',
        position: 160,
        pathMatchExact: true,
      },
      {
        name: 'Alerts',
        routeOrFunction: '/alert',
        icon: 'dashboard',
        position: 165,
        pathMatchExact: true,
      },
      {
        name: 'Resources',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 170,
        pathMatchExact: true,
      },
      {
        name: 'Analytics Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 175,
        pathMatchExact: true,
      },

      // EXTRA COMPONENTS FOR LATER USE
      {
        name: 'EXTRAS',
        position: 200,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 201,
        pathMatchExact: true,
      },
      {
        name: 'Forms',
        icon: 'description',
        position: 202,
        subItems: [
          {
            name: 'Form Elements',
            routeOrFunction: '/forms/form-elements',
            position: 10,
          },
          {
            name: 'Form Wizard',
            routeOrFunction: '/forms/form-wizard',
            position: 15,
          },
        ],
      },
      {
        name: 'Drag & Drop',
        routeOrFunction: '/drag-and-drop',
        icon: 'mouse',
        position: 203,
      },
      {
        name: 'WYSIWYG Editor',
        routeOrFunction: '/editor',
        icon: 'format_shapes',
        position: 204,
      },
    ]);
  }
}
