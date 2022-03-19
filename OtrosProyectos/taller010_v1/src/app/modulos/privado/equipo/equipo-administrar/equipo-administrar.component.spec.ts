import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoAdministrarComponent } from './equipo-administrar.component';

describe('EquipoAdministrarComponent', () => {
  let component: EquipoAdministrarComponent;
  let fixture: ComponentFixture<EquipoAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoAdministrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
