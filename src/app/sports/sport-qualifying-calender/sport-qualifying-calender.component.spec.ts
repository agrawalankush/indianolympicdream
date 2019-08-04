import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportQualifyingCalenderComponent } from './sport-qualifying-calender.component';

describe('SportQualifyingCalenderComponent', () => {
  let component: SportQualifyingCalenderComponent;
  let fixture: ComponentFixture<SportQualifyingCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportQualifyingCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportQualifyingCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
