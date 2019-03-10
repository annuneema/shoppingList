import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavItemsService } from './services/navItems.service';
import { UsersService } from './services/users.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutes } from './models/routes';
import { AuthService } from './authGard/auth.service'
import { ItemsService } from './services/items.service';
import { ProductComponent } from './components/product/product.component';
import { DetailsComponent } from './components/details/details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AuthGard } from './authGard/authgard';

 const appRoutes: Routes = AppRoutes;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    DetailsComponent,
    AddProductComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false } )
  ],
  providers: [ UsersService, NavItemsService, ItemsService, AuthService, AuthGard],
  bootstrap: [AppComponent]
})
export class AppModule { }
