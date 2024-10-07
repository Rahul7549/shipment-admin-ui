import { createReducer, on } from '@ngrx/store';
import * as ShipmentActions from './shipment.actions';
import { ShipmentState, initialShipmentState } from './shipment.state';

export const shipmentReducer = createReducer(
  initialShipmentState,

  // Load all shipments
  on(ShipmentActions.loadShipments, state => ({
    ...state,
    loading: true
  })),
  on(ShipmentActions.loadShipmentsSuccess, (state, { shipments }) => ({
    ...state,
    shipments,
    loading: false
  })),
  on(ShipmentActions.loadShipmentsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Load a specific shipment
  on(ShipmentActions.loadShipment, state => ({
    ...state,
    loading: true
  })),
  on(ShipmentActions.loadShipmentSuccess, (state, { shipment }) => ({
    ...state,
    selectedShipment: shipment,
    loading: false
  })),
  on(ShipmentActions.loadShipmentFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Create a shipment
  on(ShipmentActions.createShipment, state => ({
    ...state,
    loading: true
  })),
  on(ShipmentActions.createShipmentSuccess, (state, { shipment }) => ({
    ...state,
    shipments: [shipment,...state.shipments],
    loading: false
  })),
  on(ShipmentActions.createShipmentFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Update a shipment
  on(ShipmentActions.updateShipment, state => ({
    ...state,
    loading: true
  })),
  on(ShipmentActions.updateShipmentSuccess, (state, { shipment }) => ({
    ...state,
    shipments: state.shipments.map(s => (s.id === shipment?.id ? shipment : s)),
    loading: false
  })),
  on(ShipmentActions.updateShipmentFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(ShipmentActions.deleteShipmentSuccess, (state, { id }) => ({
    ...state,
    shipments: state.shipments.filter(shipment => shipment.id !== id),
    loading: false,
  })),
  on(ShipmentActions.deleteShipmentFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
