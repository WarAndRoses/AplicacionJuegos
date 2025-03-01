import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionJuegosPage } from './seleccion-juegos.page';

describe('SeleccionJuegosPage', () => {
  let component: SeleccionJuegosPage;
  let fixture: ComponentFixture<SeleccionJuegosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionJuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
