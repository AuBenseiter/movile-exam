import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import {ModalSuccessComponent} from "./modal-success/modal-success.component";
import {IonicModule} from "@ionic/angular";
@NgModule({
  declarations: [
      HeaderComponent,
      ModalSuccessComponent
  ],
  imports: [
      CommonModule,
      IonicModule
  ],
  exports: [
      HeaderComponent,
      ModalSuccessComponent
  ]
})
export class ComponentsModule { }
