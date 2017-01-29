import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LookForServerHealthComponent } from "./look-for-server-health/look-for-server-health.component";
import { ListScreenComponent } from "./list-screen/list-screen.component";
import { DetailsScreenComponent } from "./details-screen/details-screen.component";

export const router: Routes = [
  { path: '', redirectTo: 'serverHealth', pathMatch: 'full' },
  { path: 'serverHealth', component: LookForServerHealthComponent},
  { path: 'listScreen', component: ListScreenComponent},
  { path: 'detailsScreen', component: DetailsScreenComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
