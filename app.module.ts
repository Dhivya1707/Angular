
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    StudentComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }