import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SalaryCalculationService } from '../../services/calcular-pagos.service';
import { SalaryCalculationRequest } from '../../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../../models/salary-calculation-response.model';

@Component({
  selector: 'app-calcular-pagos',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule  
  ],
  templateUrl: './calcular-pagos.component.html',
  styleUrls: ['./calcular-pagos.component.css']
})
export class CalcularPagosComponent {
  form: FormGroup;
  result?: SalaryCalculationResponse;  

  constructor(
    private fb: FormBuilder,
    private salaryCalculationService: SalaryCalculationService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      hourlyWage: [0, [Validators.required, Validators.min(0.01)]],
      hoursWorked: [0, [Validators.required, Validators.min(1)]],
      overtimeHours: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const request: SalaryCalculationRequest = this.form.value;
      this.result = this.salaryCalculationService.calculateSalary(request); 
      console.log(this.result);
    }
  }
}
