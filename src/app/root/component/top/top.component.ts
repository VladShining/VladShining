import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  list: { label: string; link?: string }[];

  constructor() {
    this.list = [
      {
        label: 'About',
        link: '',
      },
      {
        label: 'Etude',
        link: 'education',
      },
      {
        label: 'Competence',
        link: 'skill',
      },
      {
        label: 'Profession',
        link: 'work',
      },
    ];
  }

  ngOnInit(): void {}
}
