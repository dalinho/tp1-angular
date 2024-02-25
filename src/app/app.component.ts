import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-data-binding';
  count = 0;
  compteur = 0;
  showBtn = false
  userList = [
    { name: 'Mohamed', age: 10 },
    { name: 'Ali', age: 20 },
    { name: 'Samia', age: 12 },
    { name: 'Saleh', age: 25 },
  ];
  etat_affichage = false;
  etat_bouton = true;
  afficher() {
    this.etat_affichage = true;
  }

  toggleAffichage() {
    this.etat_affichage = !this.etat_affichage;
  }
  increment() {
    if (this.count < this.compteur) {
      this.count++;
    }
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  check(){
    if(this.compteur <= 10 &&  this.compteur>0){
      this.showBtn = true
    }
    else{
      this.showBtn =false
    }
  }
}
