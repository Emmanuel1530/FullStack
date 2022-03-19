import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compu001Component } from './compu001.component';

describe('Compu001Component', () => {
  let component: Compu001Component;
  let fixture: ComponentFixture<Compu001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compu001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compu001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
