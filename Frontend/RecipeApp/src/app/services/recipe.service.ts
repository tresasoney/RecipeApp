import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  addrecipe(recipe: any) {
    return this.http.post<any>('http://localhost:7000/addrecipe', { "recipe": recipe });
  };
  editrecipe(recipe: any) {
    return this.http.post<any>('http://localhost:7000/editrecipe', { "recipe": recipe });
  };
  getallrecipes() {
    return this.http.post<any>('http://localhost:7000/getallrecipes', { "get": "get" });
  };
  getrecipe(id: any) {
    return this.http.post<any>('http://localhost:7000/getrecipe', { "id": id });
  };
  deleterecipe(id: any) {
    return this.http.post<any>('http://localhost:7000/deleterecipe', { "id": id });
  };
}
