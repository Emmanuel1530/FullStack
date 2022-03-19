import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadCrearComponent } from './ciudad-crear.component';

describe('CiudadCrearComponent', () => {
  let component: CiudadCrearComponent;
  let fixture: ComponentFixture<CiudadCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
