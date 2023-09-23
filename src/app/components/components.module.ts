import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import {ModalSuccessComponent} from "./modal-success/modal-success.component";
import {IonicModule} from "@ionic/angular";
import {ModeLightComponent} from "./mode-light/mode-light.component";
@NgModule({
  declarations: [
    HeaderComponent,
    ModalSuccessComponent,
    ModeLightComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    ModalSuccessComponent,
    ModeLightComponent
  ]
})
export class ComponentsModule { }
