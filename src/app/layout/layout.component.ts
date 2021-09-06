import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav/sidenav.service';
import { filter, map, startWith } from 'rxjs/operators';
import { ThemeService } from '../../@iams/services/theme.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { checkRouterChildsData } from '../../@iams/utils/check-router-childs-data';

@Component({
  selector: 'iams-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  sidenavOpen$ = this.sidenavService.open$;
  sidenavMode$ = this.sidenavService.mode$;
  sidenavCollapsed$ = this.sidenavService.collapsed$;
  sidenavExpanded$ = this.sidenavService.expanded$;
  quickPanelOpen: boolean;

  sideNavigation$ = this.themeService.config$.pipe(
    map(config => config.navigation === 'side')
  );
  topNavigation$ = this.themeService.config$.pipe(
    map(config => config.navigation === 'top')
  );
  toolbarVisible$ = this.themeService.config$.pipe(
    map(config => config.toolbarVisible)
  );
  toolbarPosition$ = this.themeService.config$.pipe(
    map(config => config.toolbarPosition)
  );
  footerPosition$ = this.themeService.config$.pipe(
    map(config => config.footerPosition)
  );

  scrollDisabled$ = this.router.events.pipe(
    filter<NavigationEnd>(event => event instanceof NavigationEnd),
    startWith(null),
    map(() =>
      checkRouterChildsData(
        this.router.routerState.root.snapshot,
        data => data.scrollDisabled
      )
    )
  );

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  // openQuickPanel() {
  //   this.quickPanelOpen = true;
  // }

  // openConfigPanel() {
  //   this.configPanel.open();
  // }

  // closeSidenav() {
  //   this.sidenavService.close();
  // }

  // openSidenav() {
  //   this.sidenavService.open();
  // }

  ngOnDestroy(): void {}
}
