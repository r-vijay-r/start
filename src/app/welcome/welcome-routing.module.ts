import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListallComponent } from './listall/listall.component';
const routes: Routes = [
	{ path:'' ,component:ListallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WelcomeRoutingModule { }
