import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccessAreaComponent } from './admin-access-area.component';

describe('AdminAccessAreaComponent', () => {
  let component: AdminAccessAreaComponent;
  let fixture: ComponentFixture<AdminAccessAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccessAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccessAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
