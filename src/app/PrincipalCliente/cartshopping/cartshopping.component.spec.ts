import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartshoppingComponent } from './cartshopping.component';

describe('CartshoppingComponent', () => {
  let component: CartshoppingComponent;
  let fixture: ComponentFixture<CartshoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartshoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
