import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compu003Component } from './compu003.component';

describe('Compu003Component', () => {
  let component: Compu003Component;
  let fixture: ComponentFixture<Compu003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compu003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compu003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
