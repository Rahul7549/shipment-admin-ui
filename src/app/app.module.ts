import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './modules/admin/admin.module';
import { MatChipsModule } from '@angular/material/chips'; // For Chips
import { AdminAuthModule } from './modules/admin-auth/admin-auth.module';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { shipmentReducer } from './modules/admin/state/shipment.reducer';
import { ShipmentEffects } from './modules/admin/state/shipment.effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AdminModule,
    MatChipsModule,
    AdminAuthModule,
    MatDialogModule,
    MatSnackBarModule,
    StoreModule.forRoot({ shipments: shipmentReducer }), // Register the shipment reducer
    EffectsModule.forRoot([ShipmentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
