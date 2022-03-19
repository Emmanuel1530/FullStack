import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorAdministarComponent } from './jugador-administar.component';

describe('JugadorAdministarComponent', () => {
  let component: JugadorAdministarComponent;
  let fixture: ComponentFixture<JugadorAdministarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorAdministarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorAdministarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
