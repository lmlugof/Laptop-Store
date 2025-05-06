import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-index',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './products-index.component.html',
  styleUrl: './products-index.component.css'
})
export class ProductsIndexComponent {

}
