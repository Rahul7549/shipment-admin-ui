import { Component, Input, OnInit, SimpleChanges, ViewChild, isDevMode } from '@angular/core';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
import { Shipment } from '../../model/shipment';
import { MatTableDataSource } from '@angular/material/table';
import * as ShipmentActions from '../../state/shipment.actions';
import { Store } from '@ngrx/store';
import { ManageShippingComponent } from '../manage-shipping/manage-shipping.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shipping-data-view',
  templateUrl: './shipping-data-view.component.html',
  styleUrls: ['./shipping-data-view.component.css']
})
export class ShippingDataViewComponent implements OnInit {

  yAxisScale: number[] = [];
  displayedColumns: string[] = ['productName','customer', 'orderNumber', 'updatedOn','trackingNumber', 'currentStatus','actions'];
  exampleDatabase: any| null;
  data: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isLoadingResults = true;
  isRateLimitReached = false;
  @Input() activeView!:string;
  @Input() shipments:Shipment[]=[];
  paginatedData: MatTableDataSource<Shipment> = new MatTableDataSource();
  resultsLength = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  chartData: { orderedOn: string; count: number; color: string }[] = [];

  constructor(private store:Store,private dialog: MatDialog){
    this.isLoadingResults=false;
    this.resultsLength = this.data.length;
    //this.fetchShipments();
  }
  ngOnInit(): void {
    
    this.initializePaginator();
    console.log(this.shipments)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['shipments']) {
      this.initializePaginator();
      this.prepareChartData()
    }
  }

  



  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

  deleteShipment(id:number){
    this.store.dispatch(ShipmentActions.deleteShipment({ id }));
  }
  printShipment(shipment:Shipment){
    //Function has to implement latter on
    console.log("print btn clicked")
  }


  initializePaginator() {
    this.resultsLength = this.shipments.length; // Total number of records
    this.paginatedData = new MatTableDataSource(this.shipments); // Initialize the data source
    this.paginatedData.paginator = this.paginator; // Assign paginator to the data source
  }

  onPageChange(event: PageEvent) {
    // Handle any additional logic when the page changes if needed
    this.paginatedData.paginator = this.paginator;
  }

  prepareChartData() {
    const orderCountMap: { [key: string]: number } = {};

    // Aggregate orders by orderedOn date
    this.shipments.forEach(shipment => {
      const date = shipment.orderedOn; // Assuming orderedOn is in a format suitable for grouping
      if (orderCountMap[date]) {
        orderCountMap[date] += 1; // Increment count if date already exists
      } else {
        orderCountMap[date] = 1; // Initialize count for new date
      }
    });

    // Transform the map into an array for chart data
    this.chartData = Object.keys(orderCountMap).map((date) => {
      return {
        orderedOn: date,
        count: orderCountMap[date],
        color: this.generateRandomColor() // Optional: define a function to get color
      };
    });

    // Sort the chart data by date (optional)
    this.chartData.sort((a, b) => new Date(a.orderedOn).getTime() - new Date(b.orderedOn).getTime());
  }

  editShipment(shipment: Shipment): void {
    document.body.classList.add('dialog-open');
    // shipment.isEdit=true;
    const dialogRef = this.dialog.open(ManageShippingComponent, {
      width: '800px',
      data: shipment,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        document.body.classList.remove('dialog-open');
        console.log('Updated Shipment:', result);
      }
    });
  }
}
