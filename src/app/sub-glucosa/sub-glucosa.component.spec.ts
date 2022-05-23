import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGlucosaComponent } from './sub-glucosa.component';

describe('SubGlucosaComponent', () => {
  let component: SubGlucosaComponent;
  let fixture: ComponentFixture<SubGlucosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubGlucosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGlucosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
