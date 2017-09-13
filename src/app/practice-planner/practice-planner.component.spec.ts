import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticePlannerComponent } from './practice-planner.component';

describe('PracticePlannerComponent', () => {
  let component: PracticePlannerComponent;
  let fixture: ComponentFixture<PracticePlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticePlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
