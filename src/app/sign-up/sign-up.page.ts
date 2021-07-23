import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  user = {
    email: '',
    password: ''
  };
  constructor(private router: Router, public ngFireAuth: AngularFireAuth, public alert: AlertController) { }
  ngOnInit() {
  }

  signupToLogin() {
    this.router.navigate(['/login']);
  }

  async signupToSurvey() {
  try{const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
  console.log(user);

    if (user.user.email) {
      this.router.navigate(['/survey']);
      this.showAlert('Sign Up Successful','Kindly answer the survey first.');
    }
  }catch(error) {
    console.log(error);
    this.showAlert('Sign Up Failed', error.message);
  }
}

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
