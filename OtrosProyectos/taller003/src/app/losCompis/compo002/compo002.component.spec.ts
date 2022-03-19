import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo002Component } from './compo002.component';

describe('Compo002Component', () => {
  let component: Compo002Component;
  let fixture: ComponentFixture<Compo002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compo002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compo002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
