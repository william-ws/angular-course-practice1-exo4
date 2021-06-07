import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game: Array<any>;

  constructor() {
    this.game = [];

    this.game.push({
      name: 'naruto',
      technic: 'multiclonnage'
    });

    this.game.push({
      name: 'Black Clover',
      technic: 'Black meteorite'
    });
  }
  alertgameTechnic(technic: any) {
    alert(technic);
  }
}
