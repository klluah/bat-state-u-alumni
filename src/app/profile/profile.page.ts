/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

interface AlumniData {
  name: string;
  age: number;
  fullName: string;
  birthdate: string;
  email: string;
  mobileNumber: number;
  address: string;
  srcode: number;
  campus: string;
  program: string;
  gwa: number;
  batch: string;
  educationalBG: string;
  achievements: string;
  jobExperiences: string;
  skills: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  alumniList = [];
  alumniData: AlumniData;
  alumniForm: FormGroup;
  public item: any[];

  constructor(private router: Router, private firebaseService: FirebaseService,
    public fb: FormBuilder, private firestore: AngularFirestore) {
    this.alumniData = {} as AlumniData;
  }

  ngOnInit() {

    this.firestore.collection('Alumni').get().subscribe(alumni => {});

    // this.firebaseService.getCurrentUserInfo(UID).subscribe(data =>
    // {
    //   this.currentUser = data;
    //   console.log(this.currentUser)
    // });

    this.alumniForm = this.fb.group({
      fullName: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      srcode: ['', [Validators.required]],
      campus: ['', [Validators.required]],
      program: ['', [Validators.required]],
      gwa: ['', [Validators.required]],
      batch: ['', [Validators.required]],
      educationalBG: ['', [Validators.required]],
      achievements: ['', [Validators.required]],
      jobExperiences: ['', [Validators.required]],
      skills: ['', [Validators.required]]
    });

    this.firebaseService.readAlumni().subscribe(data => {

      this.alumniList = data.map(e => ({
          id: e.payload.doc.id,
          isEdit: false,
          fullName: e.payload.doc.data()['fullName'],
          birthdate: e.payload.doc.data()['birthdate'],
          email: e.payload.doc.data()['email'],
          mobileNumber: e.payload.doc.data()['mobileNumber'],
          address: e.payload.doc.data()['address'],
          srcode: e.payload.doc.data()['srcode'],
          campus: e.payload.doc.data()['campus'],
          program: e.payload.doc.data()['program'],
          gwa: e.payload.doc.data()['gwa'],
          batch: e.payload.doc.data()['batch'],
          educationalBG: e.payload.doc.data()['educationalBG'],
          achievements: e.payload.doc.data()['achievements'],
          jobExperiences: e.payload.doc.data()['jobExperiences'],
          skills: e.payload.doc.data()['skills']
        }));
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
  logout() {
    this.router.navigate(['/login']);
  }
}
