import { TestBed, inject } from '@angular/core/testing';

import { LaptopService } from './laptop.service';

describe('LaptopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaptopService]
    });
  });

  it('should ...', inject([LaptopService], (service: LaptopService) => {
    expect(service).toBeTruthy();
  }));
});
