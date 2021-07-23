import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { Routes } from '@angular/router';
import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SearchPage,
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
    SearchPageRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
