import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, public ngFireAuth: AngularFireAuth, public alert: AlertController) { }

  ngOnInit() {
  }

  loginToSignup() {
    this.router.navigate(['/sign-up']);
  }

  async loginToHome() {
    try { const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
    console.log(user);

      if (user.user.email) {
        this.router.navigate(['/home']);
        this.showAlert('Login Successful','Welcome to BatStateU Alumni App!');
      }
    }catch(error) {
      console.log(error);
      this.showAlert('Login Failed', error.message);
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
