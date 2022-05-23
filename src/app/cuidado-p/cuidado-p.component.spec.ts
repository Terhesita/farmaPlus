import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoPComponent } from './cuidado-p.component';

describe('CuidadoPComponent', () => {
  let component: CuidadoPComponent;
  let fixture: ComponentFixture<CuidadoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuidadoPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
