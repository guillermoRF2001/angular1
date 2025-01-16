import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-consumir-imagen',
  templateUrl: './consumir-imagen.component.html',
  styleUrls: ['./consumir-imagen.component.css'],
  standalone: true, 
  imports: [CommonModule],  
})
export class ConsumirImagenComponent implements OnInit {
  carts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://dummyjson.com/carts').subscribe((data) => {
      this.carts = data.carts;
    });
  }
}
