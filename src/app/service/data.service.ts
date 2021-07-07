import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  getProfil() {
    return JSON.parse(localStorage.getItem('profil') || '{}');
  }
}
