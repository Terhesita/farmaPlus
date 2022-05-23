import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRespiratorioComponent } from './sub-respiratorio.component';

describe('SubRespiratorioComponent', () => {
  let component: SubRespiratorioComponent;
  let fixture: ComponentFixture<SubRespiratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRespiratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRespiratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
