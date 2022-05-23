import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlgodonComponent } from './sub-algodon.component';

describe('SubAlgodonComponent', () => {
  let component: SubAlgodonComponent;
  let fixture: ComponentFixture<SubAlgodonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAlgodonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAlgodonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
