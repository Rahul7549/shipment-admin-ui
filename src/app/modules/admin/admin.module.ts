import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { ShippingDataViewComponent } from './components/shping-data-view/shipping-data-view.component';
import { MatChipsModule } from '@angular/material/chips'; // For Chips
import { MatListModule } from '@angular/material/list'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material animations
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ManageShippingComponent } from './components/manage-shipping/manage-shipping.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    ShippingDataViewComponent,
    ManageShippingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTooltipModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
