import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAntimicoticoComponent } from './sub-antimicotico.component';

describe('SubAntimicoticoComponent', () => {
  let component: SubAntimicoticoComponent;
  let fixture: ComponentFixture<SubAntimicoticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAntimicoticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAntimicoticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
