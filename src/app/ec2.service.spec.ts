import { TestBed } from '@angular/core/testing';

import { Ec2Service } from './ec2.service';

describe('Ec2Service', () => {
  let service: Ec2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ec2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
