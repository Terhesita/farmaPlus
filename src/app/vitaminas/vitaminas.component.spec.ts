import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminasComponent } from './vitaminas.component';

describe('VitaminasComponent', () => {
  let component: VitaminasComponent;
  let fixture: ComponentFixture<VitaminasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaminasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaminasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
