import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsEventsComponent } from './competitions-events.component';

describe('CompetitionsEventsComponent', () => {
  let component: CompetitionsEventsComponent;
  let fixture: ComponentFixture<CompetitionsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionsEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
