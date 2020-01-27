import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPageComponent } from './cd-page.component';

describe('CdPageComponent', () => {
  let component: CdPageComponent;
  let fixture: ComponentFixture<CdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
