import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificacionPage } from './modificacion.page';

describe('ModificacionPage', () => {
  let component: ModificacionPage;
  let fixture: ComponentFixture<ModificacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
