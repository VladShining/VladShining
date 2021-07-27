import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  data: any;
  imageObject: Array<object> = [
    {
      image: 'assets/img/slider/1.jpg',
      thumbImage: '/assets/logo.png',
      alt: 'alt of image',
      title: '',
    },
    {
      image: 'assets/img/slider/1.jpg',
      thumbImage: '/assets/Fichier 1.svg',
      alt: 'alt of image',
      title: '',
    },
    {
      image: 'assets/img/slider/1.jpg',
      thumbImage: '/assets/logo.png',
      alt: 'alt of image',
      title: '',
    },
    {
      image: 'assets/img/slider/1.jpg',
      thumbImage: '/assets/logo.png',
      alt: 'alt of image',
      title: '',
    },
  ];
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
