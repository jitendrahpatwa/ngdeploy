import { Component } from '@angular/core';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  socket;

  title = 'app';

  constructor(

  ){
    this.socket  = io();
    console.log(this.socket);
  }
}
