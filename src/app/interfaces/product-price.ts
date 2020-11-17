import { PriceType } from './price-type';
import { ProductPriceInfo } from './product-price-info';

export interface ProductPrice {
    id: number;
    productId: number;
    priceTypeId: number;
    price: number;
    discount?: number;
    description: string;
    status: boolean;
    priceType: PriceType;
    productPriceInfos: ProductPriceInfo[];
}