import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ComponentsModule //importar para el header y otros
  ]
})
export class RecoverModule { }
