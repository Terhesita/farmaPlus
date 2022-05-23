import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCPielComponent } from './sub-cpiel.component';

describe('SubCPielComponent', () => {
  let component: SubCPielComponent;
  let fixture: ComponentFixture<SubCPielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCPielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCPielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
