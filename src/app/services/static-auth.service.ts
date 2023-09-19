import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticAuthService {
  private staticCredentials = [
    { username: 'usuario', password: '123' },
    { username: 'usuario2', password: '123' },
    { username: 'daniel', password: '123' },
    { username: 'panqueque', password: '123' },
  ];
  getCredentials() {
    return this.staticCredentials;
  }
  constructor() { }
}
