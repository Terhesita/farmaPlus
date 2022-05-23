import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHIntimaComponent } from './sub-hintima.component';

describe('SubHIntimaComponent', () => {
  let component: SubHIntimaComponent;
  let fixture: ComponentFixture<SubHIntimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHIntimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHIntimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
