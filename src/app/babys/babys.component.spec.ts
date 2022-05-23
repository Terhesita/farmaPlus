import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysComponent } from './babys.component';

describe('BabysComponent', () => {
  let component: BabysComponent;
  let fixture: ComponentFixture<BabysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
