import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

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

  viewDetailsTab() {
    this.router.navigate(['/view-details']);
  }
}
