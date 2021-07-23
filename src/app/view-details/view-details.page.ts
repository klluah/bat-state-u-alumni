import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})

export class ViewDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
