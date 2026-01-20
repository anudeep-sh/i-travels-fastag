
export interface User {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
}

export interface Vehicle {
  id: string;
  number: string;
  type: VehicleType;
  bank: string;
}

export enum VehicleType {
  CAR = 'Car/Jeep/Van',
  LCV = 'Light Commercial Vehicle',
  BUS = 'Bus',
  TRUCK = 'Truck',
  MAV = 'Multi-Axle Vehicle'
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'Credit' | 'Debit';
  description: string;
  vehicleNumber?: string;
}

export interface Bank {
  id: string;
  name: string;
}
