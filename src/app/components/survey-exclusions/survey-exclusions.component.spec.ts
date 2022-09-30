import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyExclusionsComponent } from './survey-exclusions.component';

describe('SurveyExclusionsComponent', () => {
  let component: SurveyExclusionsComponent;
  let fixture: ComponentFixture<SurveyExclusionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyExclusionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyExclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
