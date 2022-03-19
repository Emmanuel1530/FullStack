import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compu004Component } from './compu004.component';

describe('Compu004Component', () => {
  let component: Compu004Component;
  let fixture: ComponentFixture<Compu004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compu004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compu004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
