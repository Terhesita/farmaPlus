import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubARespiratorioComponent } from './sub-arespiratorio.component';

describe('SubARespiratorioComponent', () => {
  let component: SubARespiratorioComponent;
  let fixture: ComponentFixture<SubARespiratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubARespiratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubARespiratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
