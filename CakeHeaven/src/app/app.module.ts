import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './core/contact/contact.component';
import { ProfileComponent } from './core/profile/profile.component';
import { CakePageComponent } from './dynamic/cake-page/cake-page.component';
import { CakeItemComponent } from './dynamic/cake-page/cake-item/cake-item.component';
import { NavComponent } from './core/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CakeDetailsComponent } from './dynamic/cake-page/cake-details/cake-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    CakePageComponent,
    CakeItemComponent,
    NavComponent,
    CakeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
