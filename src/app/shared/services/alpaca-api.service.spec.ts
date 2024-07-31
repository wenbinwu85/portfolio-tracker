import { TestBed } from '@angular/core/testing';

import { AlpacaApiService } from './alpaca-api.service';

describe('AlpacaApiService', () => {
  let service: AlpacaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlpacaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
