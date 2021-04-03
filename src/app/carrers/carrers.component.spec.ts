import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrersComponent } from './carrers.component';

describe('CarrersComponent', () => {
  let component: CarrersComponent;
  let fixture: ComponentFixture<CarrersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CarrersComponent);
    const app = fixture.componentInstance;
    expect(CarrersComponent).toBeTruthy();
  });
});
