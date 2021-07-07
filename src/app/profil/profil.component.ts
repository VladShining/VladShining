import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  data: any;

  constructor(private profilService: DataService) {
    this.data = {
      name: '',
      lastName: '',
    };
  }

  ngOnInit(): void {
    this.data = this.profilService.getProfil();
  }
}
