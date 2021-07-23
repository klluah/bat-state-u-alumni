import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SurveyPageRoutingModule } from './survey-routing.module';
import { Routes } from '@angular/router';
import { SurveyPage } from './survey.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SurveyPage,
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
    SurveyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SurveyPage]
})
export class SurveyPageModule {}
