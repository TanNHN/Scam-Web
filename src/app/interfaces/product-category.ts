import { Product } from './product';

export interface ProductCategory {
    productId: number;
    categoryId: number;
    status?: any;
    product: Product;
}
