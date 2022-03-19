import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioCarrosComponent } from './propietario-carros.component';

describe('PropietarioCarrosComponent', () => {
  let component: PropietarioCarrosComponent;
  let fixture: ComponentFixture<PropietarioCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioCarrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
