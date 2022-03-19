import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo001Component } from './compo001.component';

describe('Compo001Component', () => {
  let component: Compo001Component;
  let fixture: ComponentFixture<Compo001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compo001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compo001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
