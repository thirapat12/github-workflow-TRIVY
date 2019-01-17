import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninIdsComponent } from './signin-ids.component';

describe('AuthLayoutComponent', () => {
  let component: SigninIdsComponent;
  let fixture: ComponentFixture<SigninIdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
