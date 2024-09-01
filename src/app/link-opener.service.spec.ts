import { TestBed } from '@angular/core/testing';

import { LinkOpenerService } from './link-opener.service';

describe('LinkOpenerService', () => {
  let service: LinkOpenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkOpenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
