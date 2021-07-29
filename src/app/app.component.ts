import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minapp';
  produits = Produits;
}
export enum Produits {
  Computer = 'Computer',
  Tv = 'Tv',
  Phone = 'Phone'
}
