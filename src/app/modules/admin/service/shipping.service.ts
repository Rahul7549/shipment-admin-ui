import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shipment,shipments } from '../model/shipment';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private shipments: Shipment[] = []; 
  // private currentId = 1; 

  constructor() {
    this.shipments = shipments;
  }

  // Fetch all shipments
  getShipments(): Observable<Shipment[]> {
    return of(this.shipments).pipe(delay(500)); 
  }

  // Fetch a specific shipment by ID
  getShipment(id: number): Observable<Shipment|null> {
    const shipment = this.shipments.find(s => s.id === id);
    if(shipment){
      return of(shipment).pipe(delay(500)); 
    }
    return of(null).pipe(delay(500)); 

  }

  // Create a new shipment
  createShipment(shipment: Shipment): Observable<Shipment> {
    this.shipments = [shipment, ...this.shipments]; // Add new shipment at the beginning
    return of(shipment).pipe(delay(500)); 
  }

  // Update an existing shipment
  updateShipment(updatedShipment: Shipment): Observable<Shipment> {
    const index = this.shipments.findIndex(shipment => shipment.id === updatedShipment.id);
  
  // Create a new array with the updated shipment
  const updatedShipments = [
    ...this.shipments.slice(0, index), // Items before the updated one
    updatedShipment,                   // The updated shipment
    ...this.shipments.slice(index + 1)  // Items after the updated one
  ];

  // Update the state with the new array
  this.shipments = updatedShipments;
    return of(updatedShipment).pipe(delay(500)); 
  }

  // Delete a shipment
  deleteShipment(id: number): Observable<boolean> {
    const index = this.shipments.findIndex(s => s.id === id);
    if (index !== -1) {
      this.shipments.filter(s => s.id !== id);
      return of(true).pipe(delay(500)); 
    }
    return of(false).pipe(delay(500)); 
  }

  // Generate dummy data for initialization
  // private generateDummyData(count: number): Shipment[] {
  //   const shipments: Shipment[] = [];
    
  //   for (let i = 1; i <= count; i++) {
  //     shipments.push({
  //       imgUrl:'',
  //       productName:`Shirt`,
  //       id: this.currentId++,
  //       orderNumber: `6789${i}`,
  //       customer: `Customer ${i}`,
  //       shippingAddress: `${i} Main Street, Springfield`,
  //       phone: `+1-234-567-89${i}`,
  //       status: i % 2 === 0 ? 'Delivered' : 'In Transit',
  //       carrier: i % 2 === 0 ? 'UPS' : 'FedEx',
  //       trackingNumber: `1Z999999999999999${i}`,
  //       shippingMethod: i % 2 === 0 ? 'Express Shipping' : 'Standard Shipping',
  //       estimatedDelivery: `Oct ${7 + i}, 2024`,
  //       items: Math.floor(Math.random() * 5) + 1,
  //       weight: `${Math.floor(Math.random() * 10) + 1}kg`,
  //       shippingCost: Math.floor(Math.random() * 30) + 5,
  //       history: [
  //         { date: `Oct 1, 2024`, event: 'Order Placed' },
  //         { date: `Oct 3, 2024`, event: 'Shipped' },
  //         { date: `Oct ${5 + i}, 2024`, event: i % 2 === 0 ? 'Delivered' : 'Out for Delivery' }
  //       ]
  //     });
  //   }

  //   return shipments;
  // }
}
