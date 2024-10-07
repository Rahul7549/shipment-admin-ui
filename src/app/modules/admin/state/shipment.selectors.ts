import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShipmentState } from './shipment.state';

export const selectShipmentState = createFeatureSelector<ShipmentState>('shipments');

export const selectAllShipments = createSelector(
    selectShipmentState, 
    (state) => state.shipments
)
export const selectShipment = (id: number) => createSelector(selectShipmentState, 
    state => state.shipments.find(s => s.id === id));
export const selectLoading = createSelector(selectShipmentState, state => state.loading);
export const selectError = createSelector(selectShipmentState, state => state.error);
