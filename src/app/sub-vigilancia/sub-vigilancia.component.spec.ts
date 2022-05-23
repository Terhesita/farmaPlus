import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubVigilanciaComponent } from './sub-vigilancia.component';

describe('SubVigilanciaComponent', () => {
  let component: SubVigilanciaComponent;
  let fixture: ComponentFixture<SubVigilanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubVigilanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubVigilanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
