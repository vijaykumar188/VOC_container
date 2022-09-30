import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuButtonsComponent } from './ru-buttons.component';

describe('RuButtonsComponent', () => {
  let component: RuButtonsComponent;
  let fixture: ComponentFixture<RuButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
