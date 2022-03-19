import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioDetalleComponent } from './propietario-detalle.component';

describe('PropietarioDetalleComponent', () => {
  let component: PropietarioDetalleComponent;
  let fixture: ComponentFixture<PropietarioDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
