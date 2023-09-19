import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertsuccess',
  templateUrl: './alertsuccess.component.html',
  styleUrls: ['./alertsuccess.component.scss'],
})
export class AlertsuccessComponent  implements OnInit {
  public alertButtons = ['OK'];
  constructor() { }

  ngOnInit() {}

}
