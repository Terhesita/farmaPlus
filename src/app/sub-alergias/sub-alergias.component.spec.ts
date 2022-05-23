import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlergiasComponent } from './sub-alergias.component';

describe('SubAlergiasComponent', () => {
  let component: SubAlergiasComponent;
  let fixture: ComponentFixture<SubAlergiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAlergiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAlergiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
