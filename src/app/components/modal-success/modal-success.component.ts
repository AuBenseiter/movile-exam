import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.scss'],
})
export class ModalSuccessComponent  implements OnInit {
  @Input() message: string = '';
  constructor(private modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }
  ngOnInit() {}

}
