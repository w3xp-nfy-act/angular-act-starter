import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

import {  MatButtonModule} from '@angular/material/button';
import {  MatCardModule} from '@angular/material/card';
import {  MatIconModule} from '@angular/material/icon';
import {  MatInputModule} from '@angular/material/input';
import {  MatListModule} from '@angular/material/list';
import {  MatSidenavModule} from '@angular/material/sidenav';
import {  MatSnackBarModule} from '@angular/material/snack-bar';
import {  MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import {
  NotificationService,
} from './shared/services';

import {
  AngularModule
} from './examples/ngact01-example/ngact01.module';

import {
  OperatorModule,
} from './examples/ngact02-example/ngact02.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AngularModule,
    OperatorModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MarkdownModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
