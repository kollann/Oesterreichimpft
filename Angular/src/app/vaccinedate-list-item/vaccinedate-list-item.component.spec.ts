import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinedateListItemComponent } from './vaccinedate-list-item.component';

describe('VaccinedateListItemComponent', () => {
  let component: VaccinedateListItemComponent;
  let fixture: ComponentFixture<VaccinedateListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinedateListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinedateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
