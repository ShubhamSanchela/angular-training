import { TestBed } from '@angular/core/testing';

import { MultipleApiService } from './multiple-api.service';

describe('MultipleApiService', () => {
  let service: MultipleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
