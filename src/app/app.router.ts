import { Router, Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { AboutComponent } from "./about/about.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";

export const router: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductsComponent },
  { path: "about", component: AboutComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
