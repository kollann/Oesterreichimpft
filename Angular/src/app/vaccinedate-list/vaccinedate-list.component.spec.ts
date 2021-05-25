import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinedateListComponent } from './vaccinedate-list.component';

describe('VaccinedateListComponent', () => {
  let component: VaccinedateListComponent;
  let fixture: ComponentFixture<VaccinedateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinedateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinedateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
