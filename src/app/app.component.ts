import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalcularPagosComponent  } from './components/calcular-pagos/calcular-pagos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcularPagosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calcular-pagos';
}
