import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlcoholComponent } from './sub-alcohol.component';

describe('SubAlcoholComponent', () => {
  let component: SubAlcoholComponent;
  let fixture: ComponentFixture<SubAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
