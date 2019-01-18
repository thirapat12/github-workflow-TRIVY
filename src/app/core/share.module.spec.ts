import { ShareModule } from './share.module';

describe('CoreModule', () => {
  let shareModule: ShareModule;

  beforeEach(() => {
    shareModule = new ShareModule();
  });

  it('should create an instance', () => {
    expect(shareModule).toBeTruthy();
  });
});
