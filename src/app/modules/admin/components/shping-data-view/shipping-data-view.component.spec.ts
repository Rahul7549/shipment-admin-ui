import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingDataViewComponent } from './shipping-data-view.component';

describe('ShpingDataViewComponent', () => {
  let component: ShippingDataViewComponent;
  let fixture: ComponentFixture<ShippingDataViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingDataViewComponent]
    });
    fixture = TestBed.createComponent(ShippingDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
