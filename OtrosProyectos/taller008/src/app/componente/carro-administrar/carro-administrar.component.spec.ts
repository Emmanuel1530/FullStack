import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CarroAdministrarComponent} from './carro-administrar.component';

describe('CarroAdministrarComponent', () => {
  let component: CarroAdministrarComponent;
  let fixture: ComponentFixture<CarroAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroAdministrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
