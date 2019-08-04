import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportHomeComponent } from './sport-home.component';

describe('SportHomeComponent', () => {
  let component: SportHomeComponent;
  let fixture: ComponentFixture<SportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
