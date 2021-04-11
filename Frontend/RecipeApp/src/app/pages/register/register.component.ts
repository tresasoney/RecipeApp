import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  submit() {
    if (this.user.password === this.confirmpassword && this.user.password != null) {
      this.userService.adduser(this.user).subscribe(status => {
        if (status.message === "success") {
          this.router.navigate(['/login']);
        }
        else if (status.message === "email dupe") {
          this.displayMessage = "Email Already Exists!"
        }
      });
    }
    else {
      this.displayMessage = "Passwords dont match!"
    }

  };

  displayMessage = "";
  confirmpassword;
  user = new UserModel(null, null, null, null, null, null);
  ngOnInit(): void {
  }

}
