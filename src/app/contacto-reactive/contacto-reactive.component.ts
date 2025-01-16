import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-reactive',
  standalone: true, 
  imports: [ReactiveFormsModule,CommonModule], 
  templateUrl: './contacto-reactive.component.html',
  styleUrls: ['./contacto-reactive.component.css']
})
export class ContactoReactiveComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      alert('Los datos han sido enviados correctamente');
      console.log('Datos enviados:', this.contactForm.value);
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
