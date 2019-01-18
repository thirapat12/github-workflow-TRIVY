import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPageComponent } from './team-page.component';
import { ShareTestingModule } from '../../../../core/share-testing.module';

describe('TeamPageComponent', () => {
  let component: TeamPageComponent;
  let fixture: ComponentFixture<TeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareTestingModule],
      declarations: [TeamPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
