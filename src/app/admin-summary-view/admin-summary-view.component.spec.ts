import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSummaryViewComponent } from './admin-summary-view.component';

describe('AdminSummaryViewComponent', () => {
  let component: AdminSummaryViewComponent;
  let fixture: ComponentFixture<AdminSummaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSummaryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
