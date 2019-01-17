import { ShareTestingModule } from './share-testing.module';

describe('ShareTestingModule', () => {
  let shareTestingModule: ShareTestingModule;

  beforeEach(() => {
    shareTestingModule = new ShareTestingModule();
  });

  it('should create an instance', () => {
    expect(shareTestingModule).toBeTruthy();
  });
});
