import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddrecipeComponent } from './pages/recipe/addrecipe/addrecipe.component';
import { ViewallrecipesComponent } from './pages/recipe/viewallrecipes/viewallrecipes.component';
import { ViewrecipeComponent } from './pages/recipe/viewrecipe/viewrecipe.component';
import { EditrecipeComponent } from './pages/recipe/editrecipe/editrecipe.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrecipeComponent,
    ViewallrecipesComponent,
    ViewrecipeComponent,
    EditrecipeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
