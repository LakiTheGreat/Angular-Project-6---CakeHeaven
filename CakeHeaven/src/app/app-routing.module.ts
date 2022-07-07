import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './core/profile/profile.component';
import { CakeDetailsComponent } from './dynamic/cake-page/cake-details/cake-details.component';
import { CakePageComponent } from './dynamic/cake-page/cake-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cake-page', component: CakePageComponent },
  { path: 'cake-page/:x', component: CakeDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
