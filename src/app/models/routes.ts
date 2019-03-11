import { HomeComponent } from '../components/home/home.component';
import { ProductComponent } from '../components/product/product.component';
import { DetailsComponent } from '../components/details/details.component';
import { AddProductComponent } from '../components/add-product/add-product.component'
import {LoginComponent } from '../components/login/login.component';
import { AuthGard } from '../authGard/authgard';
export const AppRoutes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'addProduct',
        component: AddProductComponent,
        canActivate: [AuthGard]
    },
    {
        path: 'detail/:id',
        component: DetailsComponent
    },
]