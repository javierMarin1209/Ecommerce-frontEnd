import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrdersEmployeComponent } from './all-orders-employe.component';

describe('AllOrdersEmployeComponent', () => {
  let component: AllOrdersEmployeComponent;
  let fixture: ComponentFixture<AllOrdersEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOrdersEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrdersEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
