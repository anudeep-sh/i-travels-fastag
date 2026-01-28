
import { Bank, VehicleType, Transaction } from './types';

export const INDIAN_BANKS: Bank[] = [
  { id: 'sbi', name: 'State Bank of India' },
  { id: 'hdfc', name: 'HDFC Bank' },
  { id: 'axis', name: 'Axis Bank' },
  { id: 'icici', name: 'ICICI Bank' },
  { id: 'kotak', name: 'Kotak Mahindra' },
  { id: 'idfc', name: 'IDFC FIRST Bank' },
  { id: 'pnb', name: 'Punjab National Bank' },
  { id: 'bob', name: 'Bank of Baroda' },
  { id: 'union', name: 'Union Bank of India' },
  { id: 'canara', name: 'Canara Bank' },
  { id: 'indusind', name: 'IndusInd Bank' },
  { id: 'yes', name: 'YES Bank' },
  { id: 'paytm', name: 'Paytm Payments Bank' },
];

export const VEHICLE_TYPES = Object.values(VehicleType);

export const MOCK_TRANSACTIONS: Transaction[] = [
  { 
    id: 't1', 
    date: '2024-10-25', 
    amount: 140.00, 
    type: 'Debit', 
    description: 'Toll - ORR Hyderabad', 
    vehicleNumber: 'TS08EB1234'
  },
  { 
    id: 't2', 
    date: '2024-10-24', 
    amount: 2500.00, 
    type: 'Credit', 
    description: 'SBI Wallet Recharge', 
    vehicleNumber: '-'
  },
  { 
    id: 't3', 
    date: '2024-10-22', 
    amount: 90.00, 
    type: 'Debit', 
    description: 'Toll - Medchal NH44', 
    vehicleNumber: 'TS03AH5678'
  },
  { 
    id: 't4', 
    date: '2024-10-20', 
    amount: 210.00, 
    type: 'Debit', 
    description: 'Toll - Vijayawada Hwy', 
    vehicleNumber: 'TS08EB1234'
  },
];
