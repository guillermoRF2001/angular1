import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  contador=signal(0);

  increment() {
    this.contador.update(contar => contar + 1);
  }
}
