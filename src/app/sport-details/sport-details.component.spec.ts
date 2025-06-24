import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportDetailsComponent } from './sport-details.component';

describe('EventsComponent', () => {
  let component: SportDetailsComponent;
  let fixture: ComponentFixture<SportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [SportDetailsComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
