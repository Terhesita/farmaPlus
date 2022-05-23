import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOtrosComponent } from './sub-otros.component';

describe('SubOtrosComponent', () => {
  let component: SubOtrosComponent;
  let fixture: ComponentFixture<SubOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubOtrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
