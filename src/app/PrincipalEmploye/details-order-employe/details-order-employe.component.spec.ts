import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOrderEmployeComponent } from './details-order-employe.component';

describe('DetailsOrderEmployeComponent', () => {
  let component: DetailsOrderEmployeComponent;
  let fixture: ComponentFixture<DetailsOrderEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOrderEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOrderEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
