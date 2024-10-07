import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shipment } from '../../model/shipment';
import * as ShipmentActions from '../../state/shipment.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-manage-shipping',
  templateUrl: './manage-shipping.component.html',
  styleUrls: ['./manage-shipping.component.css']
})
export class ManageShippingComponent implements OnInit{
  shipmentForm!: FormGroup;
  isEdit: boolean;
  shipmentToEdit!: Shipment;

  constructor(
    private fb: FormBuilder,
    private store:Store,
    public dialogRef: MatDialogRef<ManageShippingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Shipment
  ) {
    this.isEdit = !!data;
    this.shipmentForm = this.fb.group({
      orderNumber: ['', Validators.required],
      customer: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      phone: ['', [Validators.required,Validators.minLength(10)]],
      status: ['', Validators.required],
      carrier: ['', Validators.required],
      trackingNumber: [''],
      shippingMethod: ['', Validators.required],
      estimatedDelivery: [new Date(), Validators.required],
      items: [0, Validators.required],
      weight: ['', Validators.required],
      shippingCost: [0, Validators.required],
      orderedOn:[new Date()],
      currentEvent:[,Validators.required],
      imgUrl:['',Validators.required]
    });
   
    
  }
  ngOnInit(): void {
    if(this.isEdit){
      this.shipmentToEdit=this.data;
      this.setFormValues(this.data);
    }
    
  }

  onSubmit(): void {
    if (this.shipmentForm.valid) {
      const shipmentData: Shipment = {
        id: this.isEdit ? this.shipmentToEdit.id : this.generateRandomId(), // Assign ID accordingly
        ...this.shipmentForm.value,
        orderedOn: new Date(this.shipmentForm.get('orderedOn')?.value).toISOString(), // Set orderedOn to current date
        updatedOn: new Date().toISOString(), // Set updatedOn to current date
        history: [{date:new Date().toISOString(),event:this.shipmentForm.get('currentEvent')?.value}] // Initialize history as empty
      };

      if (this.isEdit) {
        this.updateShipment(shipmentData);
      } else {
        this.addShipment(shipmentData);
      }
    }
  }

  addShipment(shipment: Shipment) {
    console.log('Adding shipment:', shipment);
    this.store.dispatch(ShipmentActions.createShipment({ shipment }));
    this.onCancel();
  }

  updateShipment(shipment: Shipment) {
    console.log('Updating shipment:', shipment);
    this.store.dispatch(ShipmentActions.updateShipment({ shipment }));
    this.onCancel()
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000); // Generates a random number between 0 and 99,999,999
  }
  
  setFormValues(shipment: Shipment): void {
    this.shipmentForm.patchValue({
      orderNumber: shipment.orderNumber,
      customer: shipment.customer,
      shippingAddress: shipment.shippingAddress,
      phone: shipment.phone,
      status: shipment.status,
      carrier: shipment.carrier,
      trackingNumber: shipment.trackingNumber,
      shippingMethod: shipment.shippingMethod,
      estimatedDelivery: shipment.estimatedDelivery,
      items: shipment.items,
      weight: shipment.weight,
      shippingCost: shipment.shippingCost,
      orderedOn: shipment.orderedOn,
      currentEvent: shipment.history[shipment.history.length - 1].event, // Assuming you want the last event
      imgUrl: shipment.imgUrl,
    });
  }

}

