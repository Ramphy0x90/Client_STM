import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navOptions: NavOption[] = [
    { id: 'nav__opt_home', name: 'Home', route: 'home' },
    { id: 'nav_opt_services', name: 'Servizi', route: 'servizi' },
    { id: 'nav_opt_prices', name: 'Prezzi', route: 'prezzi' },
    { id: 'nav_opt_contact', name: 'Contattaci', route: 'contattaci' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
