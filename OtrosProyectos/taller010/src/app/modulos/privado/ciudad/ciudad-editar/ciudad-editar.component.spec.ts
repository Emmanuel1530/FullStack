import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadEditarComponent } from './ciudad-editar.component';

describe('CiudadEditarComponent', () => {
  let component: CiudadEditarComponent;
  let fixture: ComponentFixture<CiudadEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
