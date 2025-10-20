import { Component } from '@angular/core';



@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrl: ['./login.component.scss']
})

export class LoginComponent {



  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  login()

/*
  constructor(
    private ss: KeycloakService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.ss.init();
    await this.ss.login();
  }

 login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }
*/

}
