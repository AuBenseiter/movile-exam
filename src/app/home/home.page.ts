import { Component, OnInit } from '@angular/core';
import {IonicModule, NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {ComponentsModule} from "../components/components.module";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [IonicModule, ComponentsModule],
})
export class HomePage {
  nombreUsuario: string = '';

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
  ) {
    // Obtiene el valor de nombreUsuario de los queryParams
    this.activatedRoute.queryParams.subscribe((params) => {
      this.nombreUsuario = params['nombreUsuario'];
    });
  }

  ngOnInit() {
  }
  goToLogin() {
    this.navCtrl.navigateForward("/login");
  }
}
