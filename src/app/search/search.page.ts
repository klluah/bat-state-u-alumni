import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public itemList: any[];
  public loadeditemList: any[];

  constructor(private router: Router, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('goals').valueChanges().subscribe(itemList => {
      this.itemList = itemList;
      this.loadeditemList = this.loadeditemList;
    });
  }
  initializeItems(): void {
    this.itemList = this.loadeditemList;
  }

  filterList(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.itemList = this.itemList.filter(currentItem => {
      if (currentItem.itemName && searchTerm) {
        if (currentItem.goalName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
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
}
