import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadAdministrarComponent } from './ciudad-administrar.component';

describe('CiudadAdministrarComponent', () => {
  let component: CiudadAdministrarComponent;
  let fixture: ComponentFixture<CiudadAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadAdministrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
