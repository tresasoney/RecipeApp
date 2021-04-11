import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-viewallrecipes',
  templateUrl: './viewallrecipes.component.html',
  styleUrls: ['./viewallrecipes.component.css']
})
export class ViewallrecipesComponent implements OnInit {

  constructor(private router: Router, private recipeService: RecipeService) { }

  recipes: RecipeModel[];

  redirect(id:any){
    this.router.navigate(['/view/'+id]);
  }

  ngOnInit(): void {
    this.recipeService.getallrecipes().subscribe(data => {
      this.recipes = data.reverse();
      console.log(this.recipes)
    });
  }

}
