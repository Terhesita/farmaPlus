import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPresionComponent } from './sub-presion.component';

describe('SubPresionComponent', () => {
  let component: SubPresionComponent;
  let fixture: ComponentFixture<SubPresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPresionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
