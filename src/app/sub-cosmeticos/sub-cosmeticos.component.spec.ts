import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCosmeticosComponent } from './sub-cosmeticos.component';

describe('SubCosmeticosComponent', () => {
  let component: SubCosmeticosComponent;
  let fixture: ComponentFixture<SubCosmeticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCosmeticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCosmeticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
