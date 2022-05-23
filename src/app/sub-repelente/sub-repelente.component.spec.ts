import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRepelenteComponent } from './sub-repelente.component';

describe('SubRepelenteComponent', () => {
  let component: SubRepelenteComponent;
  let fixture: ComponentFixture<SubRepelenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRepelenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRepelenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
