import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioCarroComponent } from './propietario-carro.component';

describe('PropietarioCarroComponent', () => {
  let component: PropietarioCarroComponent;
  let fixture: ComponentFixture<PropietarioCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
