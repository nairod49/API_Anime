import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
links!: any;
  constructor() { }

  ngOnInit(): void {
    this.links = [
      {
        name: "home",
        icon: "fas fa-home fa-lg",
        link: ''
      },
      {
        name: "participants list",
        icon: "fa-solid fa-address-book",
        link: 'participant-list'
      }
    ]
  }

}
