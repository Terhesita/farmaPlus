import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubInflamacionComponent } from './sub-inflamacion.component';

describe('SubInflamacionComponent', () => {
  let component: SubInflamacionComponent;
  let fixture: ComponentFixture<SubInflamacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubInflamacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubInflamacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
