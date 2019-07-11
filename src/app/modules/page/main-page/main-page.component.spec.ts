import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTestingModule } from '../../../core/share-testing.module';

import { MainPageComponent } from './main-page.component';
import { ProductPageComponent } from '../pages/product-page/product-page.component';
import { ServicePageComponent } from '../pages/service-page/service-page.component';
import { PortfolioPageComponent } from '../pages/portfolio-page/portfolio-page.component';
import { TeamPageComponent } from '../pages/team-page/team-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { UdemyPageComponent } from '../pages/udemy-page/udemy-page.component';

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}

window.$ = require('jquery');

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareTestingModule],
      declarations: [
        MainPageComponent,
        ProductPageComponent,
        ServicePageComponent,
        PortfolioPageComponent,
        TeamPageComponent,
        AboutPageComponent,
        ContactPageComponent,
        UdemyPageComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
