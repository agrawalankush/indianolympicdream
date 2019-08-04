import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportQualifyingSysystemComponent } from './sport-qualifying-sysystem.component';

describe('SportQualifyingSysystemComponent', () => {
  let component: SportQualifyingSysystemComponent;
  let fixture: ComponentFixture<SportQualifyingSysystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportQualifyingSysystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportQualifyingSysystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
