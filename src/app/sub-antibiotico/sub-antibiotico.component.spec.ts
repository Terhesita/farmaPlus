import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAntibioticoComponent } from './sub-antibiotico.component';

describe('SubAntibioticoComponent', () => {
  let component: SubAntibioticoComponent;
  let fixture: ComponentFixture<SubAntibioticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAntibioticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAntibioticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
