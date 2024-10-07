import { Shipment } from "../model/shipment";

export interface ShipmentState {
  shipments: Shipment[];
  selectedShipment: Shipment | null;
  loading: boolean;
  error: string | null;
}

export const initialShipmentState: ShipmentState = {
  shipments: [],
  selectedShipment: null,
  loading: false,
  error: null,
};