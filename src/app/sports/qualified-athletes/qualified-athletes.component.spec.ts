import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiedAthletesComponent } from './qualified-athletes.component';

describe('QualifiedAthletesComponent', () => {
  let component: QualifiedAthletesComponent;
  let fixture: ComponentFixture<QualifiedAthletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualifiedAthletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifiedAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
