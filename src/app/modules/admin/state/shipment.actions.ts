import { createAction, props } from '@ngrx/store';
import { Shipment } from '../model/shipment';

// Fetch all shipments
export const loadShipments = createAction('[Shipment] Load Shipments');
export const loadShipmentsSuccess = createAction('[Shipment] Load Shipments Success', props<{ shipments: Shipment[] }>());
export const loadShipmentsFailure = createAction('[Shipment] Load Shipments Failure', props<{ error: string }>());

// Fetch a shipment by ID
export const loadShipment = createAction('[Shipment] Load Shipment', props<{ id: number }>());
export const loadShipmentSuccess = createAction('[Shipment] Load Shipment Success', props<{ shipment: Shipment| null }>());
export const loadShipmentFailure = createAction('[Shipment] Load Shipment Failure', props<{ error: string }>());

// Create a new shipment
export const createShipment = createAction('[Shipment] Create Shipment', props<{ shipment: Shipment }>());
export const createShipmentSuccess = createAction('[Shipment] Create Shipment Success', props<{ shipment: Shipment }>());
export const createShipmentFailure = createAction('[Shipment] Create Shipment Failure', props<{ error: string }>());

// Update an existing shipment
export const updateShipment = createAction('[Shipment] Update Shipment', props<{ shipment: Shipment }>());
export const updateShipmentSuccess = createAction('[Shipment] Update Shipment Success', props<{ shipment: Shipment| null }>());
export const updateShipmentFailure = createAction('[Shipment] Update Shipment Failure', props<{ error: string }>());


export const deleteShipment = createAction('[Shipment] Delete Shipment',props<{ id: number }>());
export const deleteShipmentSuccess = createAction('[Shipment] Delete Shipment Success',props<{ id: number }>());
export const deleteShipmentFailure = createAction('[Shipment] Delete Shipment Failure',props<{ error: string }>());