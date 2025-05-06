import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Router, RouterLink } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { LaptopCreation } from '../laptop.models';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  private readonly formBuilder = inject(FormBuilder);
  laptopService = inject(LaptopService);
  router = inject(Router);

  form = this.formBuilder.group({
    nombre: ['']
  })

  saveChanges() {
    let laptop = this.form.value as LaptopCreation;
    this.laptopService.create(laptop).subscribe(() => {
      this.router.navigate(["products"]);
    })
  }
}
