import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTemperaturaComponent } from './sub-temperatura.component';

describe('SubTemperaturaComponent', () => {
  let component: SubTemperaturaComponent;
  let fixture: ComponentFixture<SubTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
