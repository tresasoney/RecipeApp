import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  submit() {
    this.userService.loginvalidate(this.user).subscribe((status) => {
      if (status.message == "success") {
        localStorage.setItem("loggedin", "true");
        this.router.navigate(['/']);
      }
      else{
        this.displayMessage = "Incorrect Credentials!";
        this.divIsVisible = true;
      }
    });
  }

  user = {
    email: "",
    password: ""
  };
  divIsVisible = false;

  displayMessage = "";

  ngOnInit(): void {
  }

}
