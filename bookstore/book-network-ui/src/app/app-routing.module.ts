import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  }
/*,
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule),
    canActivate: [authGuard]
  }
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
