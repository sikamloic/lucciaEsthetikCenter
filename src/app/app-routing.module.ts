import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NosSoinsComponent } from './pages/nos-soins/nos-soins.component';
import { SalonComponent } from './pages/salon/salon.component';

const routes: Routes = [
  {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  {path: 'acceuil', component: HomeComponent},
  {path: 'a propos', component: AproposComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'nos soins', component: NosSoinsComponent},
  {path: 'salon', component: SalonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
