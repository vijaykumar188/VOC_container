import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsatModuleComponent } from './csat-module.component';

describe('CsatModuleComponent', () => {
  let component: CsatModuleComponent;
  let fixture: ComponentFixture<CsatModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsatModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsatModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
