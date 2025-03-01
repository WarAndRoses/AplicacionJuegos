import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput,IonList,IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonList, IonItem, IonButton],
})
export class HomePage {
  constructor(private router: Router) {}
    navigateToRegistro() {
      this.router.navigate(['/registro']);
  } 
    navigateToSeleccionJuegos() {
      this.router.navigate(['/seleccion-juegos']);
  }
}
