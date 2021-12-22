import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home/home.component';
import { ViewAllComponent } from './products/view-all/view-all.component';
import { ViewByCategoryComponent } from './products/view/view-by-category/view-by-category.component';
import { ViewByTypeComponent } from './products/view/view-by-category/view-by-type/view-by-type.component';
import { ViewComponent } from './products/view/view.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'view',children:[
    {path:'', component:ViewComponent},
    {path:'view-by-category', children:[
      {path:'', component:ViewByCategoryComponent},
      {path:'view-by-type', component:ViewByTypeComponent},
    ]}
  ]},
  {path:'view-all', component:ViewAllComponent},

  {path:'users', children:[
    {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  ]
  },

  {path:'products', children:[
    {path:'',component:ViewAllComponent},
    {path:'view',component:ViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
