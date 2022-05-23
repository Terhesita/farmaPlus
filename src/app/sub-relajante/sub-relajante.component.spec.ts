import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRelajanteComponent } from './sub-relajante.component';

describe('SubRelajanteComponent', () => {
  let component: SubRelajanteComponent;
  let fixture: ComponentFixture<SubRelajanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRelajanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRelajanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
