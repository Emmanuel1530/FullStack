import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioAdministrarComponent } from './propietario-administrar.component';

describe('PropietarioAdministrarComponent', () => {
  let component: PropietarioAdministrarComponent;
  let fixture: ComponentFixture<PropietarioAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioAdministrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
