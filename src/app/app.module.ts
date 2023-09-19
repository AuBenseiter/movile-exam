import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule} from "./components/components.module";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      IonicModule,
      ComponentsModule
  ]
})
export class AppModule { }
