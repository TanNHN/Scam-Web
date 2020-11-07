export interface Product {
    id: number;
    name: string;
    iconUrl: string;
    backgroundImageUrl: string;
    overview: string;
    description: string;
    url: string;
    rating: number;
    companyId: number;
    userId?: number;
    status: boolean;
    company?: any;
    user?: any;
    productPrices: any[];
}
