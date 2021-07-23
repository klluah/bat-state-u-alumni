/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {

  alumniList = [];
  alumniData: AlumniData;
  alumniForm: FormGroup;

  constructor(private router: Router, private firebaseService: FirebaseService, public fb: FormBuilder) {
                this.alumniData = {} as AlumniData;
              }

  ngOnInit() {
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

  createRecord() {
    console.log(this.alumniForm.value);
    this.firebaseService.createAlumni(this.alumniForm.value).then(resp => {
      this.alumniForm.reset();
      this.router.navigate(['/home']);
    })
      .catch(error => {
        console.log(error);
      });
  }

  removeRecord(rowID) {
    this.firebaseService.deleteAlumni(rowID);
  }

  editRecord(record) {
    record.isEdit = true;
    record.EditfullName = record.fullName;
    record.Editbirthdate = record.birthdate;
    record.Editemail = record.email;
    record.EditmobileNumber = record.mobileNumber;
    record.Editaddress = record.address;
    record.Editsrcode = record.srcode;
    record.Editcampus = record.campus;
    record.Editprogram = record.program;
    record.Editgwa = record.gwa;
    record.Editbatch = record.batch;
    record.EditeducationalBG = record.educationalBG;
    record.Editachievements = record.achievements;
    record.EditjobExperiences = record.jobExperiences;
    record.Editskills = record.skills;
  }

  updateRecord(recordRow) {
    const record = {};
    record['fullName'] = recordRow.EditfullName;
    record['birthdate'] = recordRow.Editbirthdate;
    record['email'] = recordRow.Editemail;
    record['mobileNumber'] = recordRow.EditmobileNumber;
    record['address'] = recordRow.Editaddress;
    record['srcode'] = recordRow.Editsrcode;
    record['campus'] = recordRow.Editcampus;
    record['program'] = recordRow.Editprogram;
    record['gwa'] = recordRow.Editgwa;
    record['batch'] = recordRow.Editbatch;
    record['educationalBG'] = recordRow.EditeducationalBG;
    record['achievements'] = recordRow.Editachievements;
    record['jobExperiences'] = recordRow.EditjobExperiences;
    record['skills'] = recordRow.Editskills;
    this.firebaseService.updateAlumni(recordRow.id, record);
    recordRow.isEdit = false;
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

