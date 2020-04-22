import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {
  AngularComponent
} from './examples/ngact01-example'

import {
  MarkdownComponent,
} from './examples/ngact02-example';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'examples/ngact01-example',
    pathMatch: 'full'
  },
  {path: 'examples/ngact01-example', component: AngularComponent},
  {path: 'examples/ngact02-example', component: MarkdownComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
