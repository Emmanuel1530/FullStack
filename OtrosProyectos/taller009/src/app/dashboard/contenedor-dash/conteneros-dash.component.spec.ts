import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenerosDashComponent } from './conteneros-dash.component';

describe('ContenerosDashComponent', () => {
  let component: ContenerosDashComponent;
  let fixture: ComponentFixture<ContenerosDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenerosDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenerosDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
