import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { accessLevels } from '../interfaces/userInfo';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private service: ServiceService) {}

  username: string = "";
  password: string = "";

  login() {
    const userInfo = this.service.varifyUser(this.username, this.password);
    if(userInfo.accessLevel === accessLevels.USER) {
      this.router.navigate(['/time/'+ userInfo.employeeId]);
    } else {
      this.router.navigate(['/summary']);
    }
  }

  register() {
    const userInfo = this.service.varifyUser(this.username, this.password);
    this.router.navigate(['/time/'+ userInfo.employeeId]);
  }

}
