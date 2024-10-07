import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import {ShippingService} from '../service/shipping.service'
import * as ShipmentActions from './shipment.actions';

@Injectable()
export class ShipmentEffects {
  constructor(
    private actions$: Actions,
    private shippingService: ShippingService
  ) {}

  // Load all shipments effect
  loadShipments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShipmentActions.loadShipments),
      mergeMap(() =>
        this.shippingService.getShipments().pipe(
          map(shipments => ShipmentActions.loadShipmentsSuccess({ shipments })),
          catchError(error => of(ShipmentActions.loadShipmentsFailure({ error })))
        )
      )
    )
  );

  // Load a specific shipment effect
  loadShipment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShipmentActions.loadShipment),
      mergeMap(action =>
        this.shippingService.getShipment(action.id).pipe(
          map(shipment => ShipmentActions.loadShipmentSuccess({ shipment })),
          catchError(error => of(ShipmentActions.loadShipmentFailure({ error })))
        )
      )
    )
  );

  // Create a new shipment effect
  createShipment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShipmentActions.createShipment),
      mergeMap(action =>
        this.shippingService.createShipment(action.shipment).pipe(
          map(shipment => ShipmentActions.createShipmentSuccess({ shipment })),
          catchError(error => of(ShipmentActions.createShipmentFailure({ error })))
        )
      )
    )
  );

  // Update shipment effect
  updateShipment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShipmentActions.updateShipment),
      mergeMap(action =>
        this.shippingService.updateShipment(action.shipment).pipe(
          map(shipment => ShipmentActions.updateShipmentSuccess({ shipment })),
          catchError(error => of(ShipmentActions.updateShipmentFailure({ error })))
        )
      )
    )
  );

  deleteShipment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShipmentActions.deleteShipment),
      mergeMap(action =>
        this.shippingService.deleteShipment(action.id).pipe(
          map(() => ShipmentActions.deleteShipmentSuccess({ id: action.id })),
          catchError(error => of(ShipmentActions.deleteShipmentFailure({ error })))
        )
      )
    )
  );
}
