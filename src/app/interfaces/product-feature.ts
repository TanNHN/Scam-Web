import { Feature } from './feature';

  export interface ProductFeature {
        id: number;
        productId: number;
        featureId: number;
        rate: number;
        status: boolean;
        feature: Feature;
    }