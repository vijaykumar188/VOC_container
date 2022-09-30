import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuNotificationsComponent } from './ru-notifications.component';

describe('RuNotificationsComponent', () => {
  let component: RuNotificationsComponent;
  let fixture: ComponentFixture<RuNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
