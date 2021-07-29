import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  list: { label: string; link?: string }[];

  constructor() {
    this.list = [
      {
        label: 'à propos|',
        link: 'about'
      },
      {
        label: 'biblio|',
        link: 'blog'
      },
      {
        label: 'contact',
        link: 'contact'
      }
    ];
  }

  ngOnInit(): void {}
}
