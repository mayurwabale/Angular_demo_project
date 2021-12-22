import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { ViewAllComponent } from './products/view-all/view-all.component';
import { ViewComponent } from './products/view/view.component';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AddProductComponent } from './add-product/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './home/home/header/header.component';
import { FooterComponent } from './home/home/footer/footer.component';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewByCategoryComponent } from './products/view/view-by-category/view-by-category.component';
import { ViewByTypeComponent } from './products/view/view-by-category/view-by-type/view-by-type.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ViewAllComponent,
    ViewComponent,
    HomeComponent,
    ContactComponent,
    AddProductComponent,
    HeaderComponent,
    FooterComponent,
    UpdateProductComponent,
    ViewByCategoryComponent,
    ViewByTypeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
   
   
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
