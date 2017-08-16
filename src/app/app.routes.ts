import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';

export const CustomRoutes: Routes = [
  { path: '', redirectTo: 'stock', pathMatch: 'full' },
  { path: 'stock', component: StockComponent }
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(CustomRoutes);
