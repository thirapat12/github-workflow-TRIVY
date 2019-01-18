import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePageComponent } from './service-page.component';
import { ShareTestingModule } from '../../../../core/share-testing.module';

describe('ServicePageComponent', () => {
  let component: ServicePageComponent;
  let fixture: ComponentFixture<ServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareTestingModule],
      declarations: [ServicePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
