import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  links: any[];
  constructor() {
    this.links = [
      {
        name: "Home",
        link: "#/home"
      },
      {
        name: "Products",
        link: "#/products"
      },
      {
        name: "Cart",
        link: "#/cart"
      },
      {
        name: "About",
        link: "#/about"
      }
    ];
  }

  add(title, url) {
    if (title !== "" && url !== "") {
      this.links.push({
        name: title,
        url,
        isNew: true
      });

      // this.title='';
      // this.url='';
    }
  }
}
