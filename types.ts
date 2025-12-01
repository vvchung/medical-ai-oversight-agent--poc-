
export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  ARCHITECTURE = 'ARCHITECTURE',
  SIMULATION = 'SIMULATION',
  RISK_ASSESSMENT = 'RISK_ASSESSMENT',
}

export interface RiskItem {
  id: string;
  category: string;
  level: 'Low' | 'Medium' | 'High';
  mitigation: string;
  icon: 'Shield' | 'Lock' | 'Server' | 'FileText';
}

export interface SimulationResult {
  rawResponse: string;
  oversightResponse: string;
  isCorrected: boolean;
  citations: string[];
}

export interface ArchitectureLayer {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  color: string;
}