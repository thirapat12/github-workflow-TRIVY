import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiPageComponent } from './ci-page.component';

describe('CiPageComponent', () => {
  let component: CiPageComponent;
  let fixture: ComponentFixture<CiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
