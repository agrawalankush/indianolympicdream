import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialtAthletesComponent } from './potentialt-athletes.component';

describe('PotentialtAthletesComponent', () => {
  let component: PotentialtAthletesComponent;
  let fixture: ComponentFixture<PotentialtAthletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialtAthletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialtAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
