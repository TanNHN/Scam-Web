import { IndustryExpert } from './industry-expert';

export interface User {
    id: number;
    name: string;
    avatarUrl: string;
    email: string;
    facebook?: any;
    phone?: any;
    bio?: any;
    joinDate?: Date;
    provider: string;
    role: string;
    status?: boolean;
    industryExperts: IndustryExpert [];
    products: any[];
    workFors: any[];
}
