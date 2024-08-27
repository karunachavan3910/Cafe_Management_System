import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'home', component: HomeComponent },
  {path: 'admin', component:AdminComponent},
  {path: 'user', component:UserComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'addproduct', component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
