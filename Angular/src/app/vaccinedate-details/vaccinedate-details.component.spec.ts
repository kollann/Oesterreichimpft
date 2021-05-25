import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinedateDetailsComponent } from './vaccinedate-details.component';

describe('VaccinedateDetailsComponent', () => {
  let component: VaccinedateDetailsComponent;
  let fixture: ComponentFixture<VaccinedateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinedateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinedateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
