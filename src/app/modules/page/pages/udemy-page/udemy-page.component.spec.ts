import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareTestingModule } from '../../../../core/share-testing.module';
import { UdemyPageComponent } from './udemy-page.component';

describe('TeamPageComponent', () => {
  let component: UdemyPageComponent;
  let fixture: ComponentFixture<UdemyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareTestingModule],
      declarations: [UdemyPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
