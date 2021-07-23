import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
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
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
