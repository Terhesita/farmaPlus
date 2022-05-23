import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubParasitosComponent } from './sub-parasitos.component';

describe('SubParasitosComponent', () => {
  let component: SubParasitosComponent;
  let fixture: ComponentFixture<SubParasitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubParasitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubParasitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
