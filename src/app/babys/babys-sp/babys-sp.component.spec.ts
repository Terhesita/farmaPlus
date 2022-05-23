import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysSpComponent } from './babys-sp.component';

describe('BabysSpComponent', () => {
  let component: BabysSpComponent;
  let fixture: ComponentFixture<BabysSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
