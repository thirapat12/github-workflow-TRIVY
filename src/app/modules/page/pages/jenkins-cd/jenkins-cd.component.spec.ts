import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsCdComponent } from './jenkins-cd.component';

describe('JenkinsCdComponent', () => {
  let component: JenkinsCdComponent;
  let fixture: ComponentFixture<JenkinsCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsCdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
