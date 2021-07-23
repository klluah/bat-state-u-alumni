import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  searchSelected() {
    this.router.navigate(['/search']);
  }

  jobsSelected() {
    this.router.navigate(['/jobs']);
  }

  homeSelected() {
    this.router.navigate(['/home']);
  }

  surveySelected() {
    this.router.navigate(['/survey']);
  }

  profileSelected() {
    this.router.navigate(['/profile']);
  }
}
