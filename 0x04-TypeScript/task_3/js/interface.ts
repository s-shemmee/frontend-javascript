export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
  assassinationSkill: number;
  specialAbility: string;
  weakness?: string;
  status?: 'Active' | 'Expelled' | 'Graduated';
  lastEvaluationDate?: string;
}