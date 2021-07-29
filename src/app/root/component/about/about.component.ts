import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  old: number;
  constructor() {
    this.old = 0;
  }

  ngOnInit(): void {
    let date: Date = new Date();
    const old = date.getFullYear() - 1995;
    this.old = old;
  }
}
