import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from '../components/components/center-component/center-component';
import { NavComponent } from '../components/components/nav-component/nav-component';
import { UserAndDetails } from '../components/components/user-and-details/user-and-details';
import { HomeComponent } from '../components/components/home-component/home-component';
import { ContactUs } from '../components/components/contact-us/contact-us';
import { ApiComponent } from '../components/components/api-component/api-component';
import { LifeCycle } from '../components/components/life-cycle/life-cycle';
import { Pipes } from '../components/components/pipes/pipes';
// import { USERS } from '../components/components/center-component/center-component';

const routes: Routes = [
  {
    path:'pipes',
    component:Pipes,

  },
  {
    path:'cycles',
    component:LifeCycle,

  },
  {
    path:'api',
    component:ApiComponent,
  },
  {
   path:'home',
   component:HomeComponent,
  },
  {
    path:'contact',
    component:ContactUs,
  },

  {
    path: 'users',
    component: NavComponent,
    
  },
  {
    path: 'userDetails',
    component: CenterComponent,
  },
  {
  path:'UserAndDetails',
  component:UserAndDetails,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
