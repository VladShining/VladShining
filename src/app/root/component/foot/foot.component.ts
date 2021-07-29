import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {
  year: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
