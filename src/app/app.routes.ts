import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

export const CustomRoutes: Routes = [
  { path: '', redirectTo: 'stock', pathMatch: 'full' },
  { path: 'stock', component: AppComponent }
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(CustomRoutes);
