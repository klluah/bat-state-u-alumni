import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JobsPageRoutingModule } from './jobs-routing.module';
import { Routes } from '@angular/router';
import { JobsPage } from './jobs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: JobsPage,
    children: [
      {
        path: 'search',
        loadChildren: './search/search.module#SearchPageModule'
      },
      {
        path: 'jobs',
        loadChildren: './jobs/jobs.module#JobsPageModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
      },
      {
        path: 'survey',
        loadChildren: './survey/survey.module#SurveyModule'
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#PageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/survey',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsPageRoutingModule
  ],
  declarations: [JobsPage]
})
export class JobsPageModule {}
