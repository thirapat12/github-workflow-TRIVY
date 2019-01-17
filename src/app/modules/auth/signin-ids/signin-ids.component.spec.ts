import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninIdsComponent } from './signin-ids.component';
import { ShareTestingModule } from '../../../core/share-testing.module';

describe('AuthLayoutComponent', () => {
  let component: SigninIdsComponent;
  let fixture: ComponentFixture<SigninIdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareTestingModule],
      declarations: [SigninIdsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
