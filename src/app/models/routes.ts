import { HomeComponent } from '../components/home/home.component';
import { ProductComponent } from '../components/product/product.component';
import { DetailsComponent } from '../components/details/details.component';
export const AppRoutes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'detail/:id',
        component: DetailsComponent
    },
]