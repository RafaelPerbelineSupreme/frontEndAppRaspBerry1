import { TestBed } from '@angular/core/testing';

import { ContaMestreService } from './conta-mestre.service';

describe('ContaMestreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaMestreService = TestBed.get(ContaMestreService);
    expect(service).toBeTruthy();
  });
});
