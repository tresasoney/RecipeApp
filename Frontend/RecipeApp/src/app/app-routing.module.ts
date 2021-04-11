import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddrecipeComponent } from './pages/recipe/addrecipe/addrecipe.component';
import { EditrecipeComponent } from './pages/recipe/editrecipe/editrecipe.component';
import { ViewallrecipesComponent } from './pages/recipe/viewallrecipes/viewallrecipes.component';
import { ViewrecipeComponent } from './pages/recipe/viewrecipe/viewrecipe.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes =
  [
    { path: 'addrecipe', component: AddrecipeComponent },
    { path: '', component: ViewallrecipesComponent },
    // { path: 'browse', component: ViewallrecipesComponent },
    { path: 'view/:id', component: ViewrecipeComponent },
    { path: 'edit/:id', component: EditrecipeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
