import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubJabonesComponent } from './sub-jabones.component';

describe('SubJabonesComponent', () => {
  let component: SubJabonesComponent;
  let fixture: ComponentFixture<SubJabonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubJabonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubJabonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
