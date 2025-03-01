// filepath: /c:/Users/War/Desktop/AplicacionJuegos/juegos/src/app/registro/registro.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonList, IonItem, IonButton]
})
export class RegistroPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() { }

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      await this.dbService.addUser(this.username, this.email, this.password);
      alert('Usuario registrado con éxito');
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error al registrar usuario', error);
      alert('Error al registrar usuario');
    }
  }
}