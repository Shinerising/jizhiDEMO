import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'./src/app.component.html'
})
export class AppComponent implements OnInit {
  navitems:any;

  constructor() {
  }

  ngOnInit(): void {
    this.navitems = [{ name: "主页", link: "/index" },
    { name: "文章", link: "/blog" }];
  }
}
