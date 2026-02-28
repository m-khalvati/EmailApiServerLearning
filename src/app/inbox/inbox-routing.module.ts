import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';

const routes: Routes = [{path : '', component : InboxHomeComponent}]; // localhost:4200/inbox/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
