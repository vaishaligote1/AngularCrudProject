import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { headerRoutes } from './header/header-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistercomComponent } from './registercom/registercom.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login' ,pathMatch:'full'
  },
  {
    path:'login' ,component:LoginComponent
  },
  {
    path:'login/register',component:RegisterComponent
  },
  {
    path:'login/registercom',component:RegistercomComponent
  },
  {
    path:'login/header', component:HeaderComponent ,children:headerRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
