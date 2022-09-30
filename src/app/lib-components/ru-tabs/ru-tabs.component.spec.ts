import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuTabsComponent } from './ru-tabs.component';

describe('RuTabsComponent', () => {
  let component: RuTabsComponent;
  let fixture: ComponentFixture<RuTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
