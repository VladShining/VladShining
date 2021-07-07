import { Component, OnInit } from '@angular/core';
import '../environments/firebase';
import firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  image: any;
  constructor() {}
  ngOnInit() {
    this.image = firebase
      .app()
      .storage('gs://ruddy-harifetra.appspot.com')
      .ref()
      .child('profil_7.png');
  }
}
