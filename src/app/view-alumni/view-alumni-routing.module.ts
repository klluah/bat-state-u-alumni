import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAlumniPage } from './view-alumni.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAlumniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAlumniPageRoutingModule {}
