import { Component } from '@angular/core';
import { computed, signal } from '@angular/core';

@Component({
  selector: 'app-second-component',
  imports: [],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  counter = signal(0);

  // Computed signal that doubles the counter value
  doubleCounter = computed(() => this.counter() * 2);

  increment() {
    this.counter.update(count => count + 1);
  }
}
