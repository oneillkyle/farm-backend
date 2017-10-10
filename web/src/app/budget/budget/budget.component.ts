import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Budget } from '../../shared';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  @Input()
  budget: Budget = new Budget();

  @Output()
  save: EventEmitter<any> = new EventEmitter();
  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      startDate: [this.budget.startDate, Validators.required],
      endDate: [this.budget.endDate, Validators.required],
      amount: [this.budget.amount, Validators.required]
    });
  }

  doSave({value, valid}) {
    if (valid) { this.save.emit(value); }
  }
}
