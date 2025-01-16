import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-td',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './contacto-td.component.html',
  styleUrls: ['./contacto-td.component.css']
})
export class ContactoTDComponent {
  onSubmit(contactForm: any): void {
    if (contactForm.valid) {
      alert('Los datos han sido enviados correctamente');
      console.log('Datos enviados:', contactForm.value);
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }
}
