import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvfilterComponent } from './advfilter.component';

describe('AdvfilterComponent', () => {
  let component: AdvfilterComponent;
  let fixture: ComponentFixture<AdvfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
