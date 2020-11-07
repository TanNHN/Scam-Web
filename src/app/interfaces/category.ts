import { ProductCategory } from './product-category';

export interface Category {
    id: number;
    name: string;
    categoryId?: number;
    status?: boolean;
    productCategories: ProductCategory[];
}
