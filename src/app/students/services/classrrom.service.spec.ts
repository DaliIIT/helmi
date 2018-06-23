import { TestBed, inject } from '@angular/core/testing';

import { ClassrromService } from './classrrom.service';

describe('ClassrromService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassrromService]
    });
  });

  it('should be created', inject([ClassrromService], (service: ClassrromService) => {
    expect(service).toBeTruthy();
  }));
});
