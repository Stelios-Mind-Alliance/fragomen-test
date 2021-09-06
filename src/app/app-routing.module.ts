import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from './guards/has-role.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/authentication/login/login.module').then(
        m => m.LoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/authentication/register/register.module').then(
        m => m.RegisterModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import(
        './pages/authentication/forgot-password/forgot-password.module'
      ).then(m => m.ForgotPasswordModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'forms/form-elements',
        loadChildren: () =>
          import('./pages/forms/form-elements/form-elements.module').then(
            m => m.FormElementsModule
          ),
      },
      {
        path: 'forms/form-wizard',
        loadChildren: () =>
          import('./pages/forms/form-wizard/form-wizard.module').then(
            m => m.FormWizardModule
          ),
      },
      {
        path: 'page-layouts',
        loadChildren: () =>
          import('./pages/page-layouts/page-layouts.module').then(
            m => m.PageLayoutsModule
          ),
      },
      {
        path: 'drag-and-drop',
        loadChildren: () =>
          import('./pages/drag-and-drop/drag-and-drop.module').then(
            m => m.DragAndDropModule
          ),
      },
      {
        path: 'editor',
        loadChildren: () =>
          import('./pages/editor/editor.module').then(m => m.EditorModule),
      },
      {
        path: 'super-admin',
        //canActivate: [IsAuthenticatedGuard, HasRoleGuard],
        // data: {
        //   role: 'Admin',
        // },
        loadChildren: () =>
          import('./pages/super-admin/super-admin.module').then(
            m => m.SuperAdminModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/admin/admin.module').then(m => m.AdminModule),
      },
      {
        path: 'director',
        loadChildren: () =>
          import('./pages/director/director.module').then(
            m => m.DirectorModule
          ),
      },
      {
        path: 'alerts-manager',
        loadChildren: () =>
          import('./pages/alerts-manager/alerts-manager.module').then(
            m => m.AlertsManagerModule
          ),
      },
      {
        path: 'regional-manager',
        loadChildren: () =>
          import('./pages/regional-manager/regional-manager.module').then(
            m => m.RegionalManagerModule
          ),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./pages/support/support.module').then(m => m.SupportModule),
      },
      {
        path: 'sme',
        loadChildren: () =>
          import('./pages/sme/sme.module').then(m => m.SmeModule),
      },
      {
        path: 'csm',
        loadChildren: () =>
          import('./pages/csm/csm.module').then(m => m.CsmModule),
      },
      {
        path: 'form',
        loadChildren: () =>
          import('./components/form/form.module').then(m => m.FormModule),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./components/news/news.module').then(m => m.NewsModule),
      },
      {
        path: 'alert',
        loadChildren: () =>
          import('./components/alert/alert.module').then(m => m.AlertModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
