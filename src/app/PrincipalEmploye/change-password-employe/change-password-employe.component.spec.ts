import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordEmployeComponent } from './change-password-employe.component';

describe('ChangePasswordEmployeComponent', () => {
  let component: ChangePasswordEmployeComponent;
  let fixture: ComponentFixture<ChangePasswordEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
