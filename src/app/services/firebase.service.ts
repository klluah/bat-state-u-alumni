// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Alumni';

  constructor(
    private firestore: AngularFirestore
  ) { }

  createAlumni(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  readAlumni() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  updateAlumni(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  deleteAlumni(recordId) {
    this.firestore.doc(this.collectionName + '/' + recordId).delete();
  }

  getCurrentUserInfo(id: string)
  {
    return this.firestore.collection('Alumni').doc(id).valueChanges();
  }
}
