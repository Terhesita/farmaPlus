import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuracionComponent } from './curacion.component';

describe('CuracionComponent', () => {
  let component: CuracionComponent;
  let fixture: ComponentFixture<CuracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
