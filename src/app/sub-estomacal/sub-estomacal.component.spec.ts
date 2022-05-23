import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEstomacalComponent } from './sub-estomacal.component';

describe('SubEstomacalComponent', () => {
  let component: SubEstomacalComponent;
  let fixture: ComponentFixture<SubEstomacalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubEstomacalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEstomacalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
