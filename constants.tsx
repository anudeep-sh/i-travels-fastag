
import React from 'react';
import { Bank, VehicleType, Transaction } from './types';

export const INDIAN_BANKS: Bank[] = [
  { id: 'axis', name: 'Axis Bank' },
  { id: 'hdfc', name: 'HDFC Bank' },
  { id: 'icici', name: 'ICICI Bank' },
  { id: 'sbi', name: 'State Bank of India' },
  { id: 'kotak', name: 'Kotak Mahindra' },
  { id: 'idfc', name: 'IDFC FIRST Bank' },
];

export const VEHICLE_TYPES = Object.values(VehicleType);

export const MOCK_TRANSACTIONS: Transaction[] = [
  { 
    id: 't1', 
    date: '2024-10-25', 
    amount: 250.00, 
    type: 'Debit', 
    description: 'Toll - Kherki Daula NH48', 
    vehicleNumber: 'HR26DQ1234'
  },
  { 
    id: 't2', 
    date: '2024-10-24', 
    amount: 3000.00, 
    type: 'Credit', 
    description: 'Axis Bank Recharge', 
    vehicleNumber: '-'
  },
  { 
    id: 't3', 
    date: '2024-10-22', 
    amount: 80.00, 
    type: 'Debit', 
    description: 'Toll - Badarpur Flyover', 
    vehicleNumber: 'DL3CAY5678'
  },
  { 
    id: 't4', 
    date: '2024-10-20', 
    amount: 150.00, 
    type: 'Debit', 
    description: 'Toll - Yamuna Expressway', 
    vehicleNumber: 'HR26DQ1234'
  },
];
