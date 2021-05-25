import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinedateFormComponent } from './vaccinedate-form.component';

describe('VaccinedateFormComponent', () => {
  let component: VaccinedateFormComponent;
  let fixture: ComponentFixture<VaccinedateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinedateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinedateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
