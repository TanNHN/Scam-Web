import { Industry } from './industry';

export interface IndustryExpert {
    industryId: number;
    userId: number;
    expertLevel: number;
    interestLevel: number;
    status: boolean;
    id: number;
    industry: Industry;
}