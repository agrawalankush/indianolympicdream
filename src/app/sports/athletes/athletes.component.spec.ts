import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesComponent } from './athletes.component';

describe('AthletesComponent', () => {
  let component: AthletesComponent;
  let fixture: ComponentFixture<AthletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
