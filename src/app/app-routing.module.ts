import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'product', component:ProfileComponent},
  {path:'blog', component:BlogComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
