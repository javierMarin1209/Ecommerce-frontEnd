import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsClientComponent } from './order-details-client.component';

describe('OrderDetailsClientComponent', () => {
  let component: OrderDetailsClientComponent;
  let fixture: ComponentFixture<OrderDetailsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
