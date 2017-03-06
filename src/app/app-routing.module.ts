import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Welcome',pathMatch:'full' },
  { path: 'Welcome', loadChildren:'app/welcome/welcome.module#WelcomeModule' },
  { path: 'Login', loadChildren:'app/login/login.module#LoginModule' },
  { path: 'Register', loadChildren:'app/register/register.module#RegisterModule' },
  { path: 'Dashboard', loadChildren:'app/dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
