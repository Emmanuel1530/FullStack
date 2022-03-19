import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoCrearComponent } from './equipo-crear.component';

describe('EquipoCrearComponent', () => {
  let component: EquipoCrearComponent;
  let fixture: ComponentFixture<EquipoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
