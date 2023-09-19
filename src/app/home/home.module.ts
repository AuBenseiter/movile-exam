import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import {ComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ],
  exports: []
})

export class HomeModule { }
