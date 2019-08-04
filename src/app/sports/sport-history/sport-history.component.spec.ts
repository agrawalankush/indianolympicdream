import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportHistoryComponent } from './sport-history.component';

describe('SportHistoryComponent', () => {
  let component: SportHistoryComponent;
  let fixture: ComponentFixture<SportHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
