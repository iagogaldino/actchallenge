import { CharDetailsComponent } from './components/home/charDetails/charDetails.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterNamePipe } from './pipe/filterName.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    CharDetailsComponent,
    FilterNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [FilterNamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
