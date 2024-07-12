// src/app/services/salary-calculation.service.ts
import { Injectable } from '@angular/core';
import { SalaryCalculationRequest} from '../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {

  calculateSalary(data: SalaryCalculationRequest): SalaryCalculationResponse {
    const regularSalary = data.hoursWorked * data.hourlyWage;
    const overtimeSalary = data.overtimeHours * data.hourlyWage * 1.5;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.1; // 10% deducciones
    const netSalary = totalSalary - deductions;

    return {
      regularSalary: regularSalary,
      overtimeSalary: overtimeSalary,
      deductions: deductions,
      netSalary: netSalary
    };
  }
}
