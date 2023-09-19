import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule, NavController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { StaticAuthService } from '../../services/static-auth.service';

import {ModalSuccessComponent} from "../../components/modal-success/modal-success.component";
import {AlertsuccessComponent} from "../../components/alertsuccess/alertsuccess.component";
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class RecoverPage implements OnInit {
  newPassword: string = '';
  username: string = '';
  constructor(
    private navCtrl: NavController,
    private authService: StaticAuthService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }
  resetPassword() {
    // Busca el usuario correspondiente en staticCredentials
    console.log('Username:', this.username);
    const credentials = this.authService.getCredentials();
    const userIndex = credentials.findIndex(
      (cred:any) => cred.username === this.username
    );

    if (userIndex !== -1) {
      // Actualiza la contraseña del usuario
      credentials[userIndex].password = this.newPassword;

      // Cierra el modal y muestra un mensaje de éxito
      this.modalController.dismiss({ 'dismissed': true });
      this.presentSuccessModal();
    } else {
      // Muestra un mensaje de error si el usuario no se encuentra
      console.log('Usuario no encontrado manito');
    }
  }

  async presentSuccessModal() {
    const modal = await this.modalController.create({
      component: ModalSuccessComponent, // llama al componente
      componentProps: {
        message: 'Contraseña cambiada con éxito.'
      }
    });
    // Espera a que el modal se cierre
    modal.onDidDismiss().then(() => {
      // Redirige al usuario al inicio u a otra página si es necesario
      this.navCtrl.navigateForward('/home'); // Asegúrate de importar RouterModule y Router
    });
    return await modal.present();
  }
}
