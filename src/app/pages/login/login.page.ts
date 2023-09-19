import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StaticAuthService } from '../../services/static-auth.service';
import { ModalController } from '@ionic/angular';

import {IonicModule, NavController} from '@ionic/angular';
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class LoginPage implements OnInit {
  //Variables
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private authService: StaticAuthService,
  ) { }

  ngOnInit() {
  }
  login() {

    console.log('Username:', this.username);
    console.log('Password:', this.password);

    //Verificacion las credenciales
    const credentials = this.authService.getCredentials();
    const user = credentials.find(
      (cred : any) => cred.username === this.username && cred.password === this.password
    );

    if (user) {
      // Navega a la página de inicio
      console.log('Inicio de sesión exitoso. Username:', this.username);
      this.router.navigate(['/home'], { queryParams: { nombreUsuario: user.username } });

      //this.navCtrl.navigateForward(`/home`);
    } else {
      console.log('Credenciales invalidas manito');
    }
  }
  forgotPassword() {
    this.navCtrl.navigateForward('/recover');
  }
}
