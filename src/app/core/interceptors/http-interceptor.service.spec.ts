import { TestBed } from '@angular/core/testing';

import { HttpInterceptorService } from './http-interceptor.service';
import { ShareTestingModule } from '../share-testing.module';

describe('HttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ShareTestingModule],
  }));

  it('should be created', () => {
    const service: HttpInterceptorService = TestBed.get(HttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
