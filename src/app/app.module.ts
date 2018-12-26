import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, SidebarComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
