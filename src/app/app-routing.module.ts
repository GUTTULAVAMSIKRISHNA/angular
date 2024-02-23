import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'signin',component:SigninComponent
  }, 
  {
    path:'aboutus',component:AboutusComponent
  }, 
  {
    path:'contactus',component:ContactusComponent
  }, 
  {
    path:'details',component:DetailsComponent
  }, 
  {
    path:'order',component:OrderComponent
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
