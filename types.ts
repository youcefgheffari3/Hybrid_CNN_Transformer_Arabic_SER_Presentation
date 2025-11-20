import { ReactNode } from 'react';

export interface SlideData {
  id: number;
  title: string;
  content: ReactNode;
  type: 'title' | 'standard' | 'visual';
}

export interface ChartData {
  name: string;
  accuracy: number;
  f1: number;
}

export interface EpochData {
  epoch: number;
  trainLoss: number;
  valLoss: number;
  trainAcc: number;
  valAcc: number;
}
