import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPanuelosComponent } from './sub-panuelos.component';

describe('SubPanuelosComponent', () => {
  let component: SubPanuelosComponent;
  let fixture: ComponentFixture<SubPanuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPanuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPanuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
