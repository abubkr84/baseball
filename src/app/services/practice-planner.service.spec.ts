import { TestBed, inject } from '@angular/core/testing';

import { PracticePlannerService } from './practice-planner.service';

describe('PracticePlannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PracticePlannerService]
    });
  });

  it('should be created', inject([PracticePlannerService], (service: PracticePlannerService) => {
    expect(service).toBeTruthy();
  }));
});
