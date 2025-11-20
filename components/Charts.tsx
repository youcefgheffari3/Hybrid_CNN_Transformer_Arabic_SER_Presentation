import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { ChartData, EpochData } from '../types';

// Data from Table IV
const comparisonData: ChartData[] = [
  { name: 'SVM (MFCC)', accuracy: 68.7, f1: 0.65 },
  { name: 'MLP (MFCC)', accuracy: 71.4, f1: 0.69 },
  { name: 'CNN Baseline', accuracy: 77.9, f1: 0.75 },
  { name: 'Proposed Hybrid', accuracy: 97.8, f1: 0.98 },
];

export const ComparisonChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={comparisonData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={{fontSize: 12}} />
        <YAxis domain={[0, 100]} label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft' }} />
        <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            cursor={{fill: 'transparent'}}
        />
        <Legend />
        <Bar dataKey="accuracy" fill="#3b82f6" name="Accuracy (%)" radius={[4, 4, 0, 0]} barSize={50} />
        <Bar dataKey="f1" fill="#10b981" name="F1 Score (x100)" radius={[4, 4, 0, 0]} barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Simulated Training Data based on Figure 3
const trainingData: EpochData[] = Array.from({ length: 100 }, (_, i) => ({
  epoch: i + 1,
  trainLoss: 1.5 * Math.exp(-0.05 * i) + Math.random() * 0.1,
  valLoss: 1.6 * Math.exp(-0.04 * i) + Math.random() * 0.15,
  trainAcc: 0 + (1 - Math.exp(-0.06 * i)) * 100,
  valAcc: 0 + (1 - Math.exp(-0.05 * i)) * 95,
}));

export const LossCurve: React.FC = () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={trainingData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="epoch" label={{ value: 'Epochs', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: 'Loss', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="trainLoss" stroke="#2563eb" strokeWidth={2} dot={false} name="Train Loss" />
          <Line type="monotone" dataKey="valLoss" stroke="#ef4444" strokeWidth={2} dot={false} name="Val Loss" />
        </LineChart>
      </ResponsiveContainer>
    );
};

// Data from Table V
const classPerfData = [
  { name: 'Anger', precision: 98, recall: 97, f1: 97 },
  { name: 'Happiness', precision: 97, recall: 98, f1: 97 },
  { name: 'Sadness', precision: 98, recall: 98, f1: 98 },
  { name: 'Neutral', precision: 98, recall: 98, f1: 98 },
];

export const ClassPerformanceChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={classPerfData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true}/>
        <XAxis type="number" domain={[90, 100]} hide />
        <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fill: '#475569'}} />
        <Tooltip 
            cursor={{fill: 'transparent'}}
            contentStyle={{ borderRadius: '8px' }}
        />
        <Legend />
        <Bar dataKey="precision" fill="#3b82f6" name="Precision" barSize={12} radius={[0,4,4,0]} />
        <Bar dataKey="recall" fill="#8b5cf6" name="Recall" barSize={12} radius={[0,4,4,0]} />
        <Bar dataKey="f1" fill="#10b981" name="F1-Score" barSize={12} radius={[0,4,4,0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};