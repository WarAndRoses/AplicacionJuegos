import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seleccion-juegos',
  templateUrl: './seleccion-juegos.page.html',
  styleUrls: ['./seleccion-juegos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SeleccionJuegosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
