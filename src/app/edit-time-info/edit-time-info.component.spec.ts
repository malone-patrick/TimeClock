import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeInfoComponent } from './edit-time-info.component';

describe('EditTimeInfoComponent', () => {
  let component: EditTimeInfoComponent;
  let fixture: ComponentFixture<EditTimeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTimeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
