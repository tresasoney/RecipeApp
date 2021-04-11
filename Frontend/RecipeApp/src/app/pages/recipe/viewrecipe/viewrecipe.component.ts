import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewrecipe',
  templateUrl: './viewrecipe.component.html',
  styleUrls: ['./viewrecipe.component.css']
})
export class ViewrecipeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService, public userService: UserService) { }

  recipe: RecipeModel;
  ingredientsArray = [];

  delete(id) {
    this.recipeService.deleterecipe(id).subscribe(status => {
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
        this.ingredientsArray = this.recipe.ingredients.split('\\n');
      });
    });
  }

}
