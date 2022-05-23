import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDentalComponent } from './sub-dental.component';

describe('SubDentalComponent', () => {
  let component: SubDentalComponent;
  let fixture: ComponentFixture<SubDentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
