import { PlatsComponent } from './components/plats/plats.component';
import { SearchPlatComponent } from './components/search-plat/search-plat.component';
import { EditChefFormComponent } from './components/edit-chef-form/edit-chef-form.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { ChefsListComponent } from './components/chefs-list/chefs-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { ChefInfoComponent } from './components/chef-info/chef-info.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addAdmin', component: AddAdminComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signupAdmin', component: SignupComponent },
  { path: 'chefs', component: ChefsListComponent },
  { path: 'addPlat', component: AddPlatComponent },
  { path: 'edit-plat/:id', component: AddPlatComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'platInformation/:id', component: PlatInfoComponent },
  { path: 'addChef', component: AddChefComponent },
  { path: 'editChef/:id', component: EditChefFormComponent },
  { path: 'displayChef/:id', component: ChefInfoComponent },
  { path: 'searchPlat', component: SearchPlatComponent },
  { path: 'plats', component: PlatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
