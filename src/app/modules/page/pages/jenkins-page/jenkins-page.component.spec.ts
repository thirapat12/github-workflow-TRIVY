import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsPageComponent } from './jenkins-page.component';

describe('JenkinsPageComponent', () => {
  let component: JenkinsPageComponent;
  let fixture: ComponentFixture<JenkinsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
