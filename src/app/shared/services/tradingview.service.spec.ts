import { TestBed } from '@angular/core/testing';

import { TradingviewService } from './tradingview.service';

describe('TradingviewService', () => {
  let service: TradingviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradingviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
