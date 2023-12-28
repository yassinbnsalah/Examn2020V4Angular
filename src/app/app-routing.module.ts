import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './core/home-component/home-component.component';
import { AddProductComponentComponent } from './core/add-product-component/add-product-component.component';
import { ShowShoppingComponentComponent } from './core/show-shopping-component/show-shopping-component.component';
import { DetailsComponent } from './core/details/details.component';

const routes: Routes = [
  {path:"home" , component:HomeComponentComponent},
  {path:"add" , component:AddProductComponentComponent},
  {path:"product/:id" , component:DetailsComponent},
  {path:"shoppingCart",  component:ShowShoppingComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
