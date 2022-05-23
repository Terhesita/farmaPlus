import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSexualComponent } from './s-sexual.component';

describe('SSexualComponent', () => {
  let component: SSexualComponent;
  let fixture: ComponentFixture<SSexualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSexualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSexualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
