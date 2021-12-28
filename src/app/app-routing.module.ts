import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./admin/list/list.component";
import {CreateComponent} from "./admin/create/create.component";
import {UpdateComponent} from "./admin/update/update.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'edit/:id',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
