import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsIndexComponent } from './products-index/products-index.component';
import { CreateProductComponent } from './create-product/create-product.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'products', component: ProductsIndexComponent
    },
    {
        path: 'products/create', component: CreateProductComponent
    }
];
