import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAntiviralesComponent } from './sub-antivirales.component';

describe('SubAntiviralesComponent', () => {
  let component: SubAntiviralesComponent;
  let fixture: ComponentFixture<SubAntiviralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAntiviralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAntiviralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
