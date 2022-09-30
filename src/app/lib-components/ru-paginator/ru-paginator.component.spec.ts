import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuPaginatorComponent } from './ru-paginator.component';

describe('RuPaginatorComponent', () => {
  let component: RuPaginatorComponent;
  let fixture: ComponentFixture<RuPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
