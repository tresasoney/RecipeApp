import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(private router: Router, private recipeService: RecipeService) { }

  recipe: RecipeModel = new RecipeModel(null, null, null, null, null, null, null);

  submit() {
    this.recipe.steps = this.recipe.steps.split('\n').join('\\n');
    this.recipe.ingredients = this.recipe.ingredients.split('\n').join('\\n');
    this.recipeService.addrecipe(this.recipe).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
  }

}
