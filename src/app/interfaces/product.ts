import { ProductFeature } from './product-feature';
import { ProductMedia } from './product-media';
import { ProductPrice } from './product-price';

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
    productPrices: ProductPrice[];
    productFeatures: ProductFeature[];
    productMedia: ProductMedia[];
}
