import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {

  constructor(private router: Router, private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  recipe: RecipeModel = new RecipeModel(null, null, null, null, null, null, null);

  submit() {
    this.recipe.steps = this.recipe.steps.split('\n').join('\\n');
    this.recipe.ingredients = this.recipe.ingredients.split('\n').join('\\n');
    this.recipeService.editrecipe(this.recipe).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.recipeService.getrecipe(params.id).subscribe(data => {
        this.recipe = data;
        this.recipe.steps = this.recipe.steps.split('\\n').join('\n');
        this.recipe.ingredients = this.recipe.ingredients.split('\\n').join('\n');
      });
    });
  }

}
