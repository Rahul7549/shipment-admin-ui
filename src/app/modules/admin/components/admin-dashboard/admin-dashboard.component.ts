import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ManageShippingComponent } from '../manage-shipping/manage-shipping.component';
import { Shipment } from '../../model/shipment';
import { Observable } from 'rxjs';
import { selectAllShipments } from '../../state/shipment.selectors';
import { Store } from '@ngrx/store';
import * as ShipmentActions from '../../state/shipment.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  isMobile: boolean = false;
  activeView:string='card-view'
  isDialogOpen: boolean=false;
  shipments: Shipment[]=[];
  shipmentFilterForm:FormGroup
  filteredShipments:Shipment[]=[];

  constructor(private breakpointObserver: BreakpointObserver,
    private store: Store,
    private fb:FormBuilder,
    private dialog: MatDialog){
      this.shipmentFilterForm = this.fb.group({
        startDate: [''],
        endDate: [''],
        searchTerm: ['']
      });
  }
  ngOnInit(): void {
    this.store.select(selectAllShipments).subscribe(value => {
      this.shipments = value;
      this.filteredShipments=value;
    });
    this.store.dispatch(ShipmentActions.loadShipments());
  }


  createShipment(shipment: Shipment) {
    this.store.dispatch(ShipmentActions.createShipment({ shipment }));
  }

  updateShipment(shipment: Shipment) {
    this.store.dispatch(ShipmentActions.updateShipment({ shipment }));
  }

  onDeleteShipment(id: number): void {
    this.store.dispatch(ShipmentActions.deleteShipment({ id }));
  }
 

  selectView(view: string) {
    // Logic for selecting view (grid, card, or chart)
    console.log(`Selected view: ${view}`);
    this.activeView=view
  }



  openAddShipmentDialog(): void {
    this.isDialogOpen=true;
    const dialogRef = this.dialog.open(ManageShippingComponent, {
      width: '800px',
      data: null,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen=false;
      document.body.classList.remove('dialog-open');  // Remove opacity effect once closed
      if (result) {
        console.log('New Shipment:', result);
      }
    });

    
  }

  applyFilter() {
    const { startDate, endDate, searchTerm } = this.shipmentFilterForm.value;

    
    const start = startDate ? new Date(startDate).getTime() : null;
    const end = endDate ? new Date(endDate).getTime() : null;
    const search = searchTerm ? searchTerm.toLowerCase() : '';

    
    this.filteredShipments = this.shipments.filter(shipment => {
      const orderDate = new Date(shipment.orderedOn).getTime();
      const inDateRange = (!start || orderDate >= start) && (!end || orderDate <= end);
      const matchesSearch = shipment.productName.toLowerCase().includes(search);
      return inDateRange && matchesSearch;
    });
  }

  clearFilter() {
    // Reset the form fields
    this.shipmentFilterForm.reset();

    // Reset the filtered list to show all shipments
    this.filteredShipments = [...this.shipments];
  }

}
