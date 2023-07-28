import { TestBed } from '@angular/core/testing';

import { UserRegisterationService } from './user-registeration.service';

describe('UserRegisterationService', () => {
  let service: UserRegisterationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegisterationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
