import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import {IonicModule, NavController} from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  //Variables
  username: string = '';
  password: string = '';

  //Credenciales estaticas
  private staticCredentials = [
    {username: 'usuario', password: '123'},
    {username: 'usuario2', password: '123'}

  ];
  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {

    console.log('Username:', this.username);
    console.log('Password:', this.password);

    //Verificacion las credenciales
    const user = this.staticCredentials.find(
      (cred) => cred.username === this.username && cred.password === this.password
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
    this.navCtrl.navigateForward('/forgot-credentials');
  }
}
