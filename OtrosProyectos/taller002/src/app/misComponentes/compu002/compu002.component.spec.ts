import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compu002Component } from './compu002.component';

describe('Compu002Component', () => {
  let component: Compu002Component;
  let fixture: ComponentFixture<Compu002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compu002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compu002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
