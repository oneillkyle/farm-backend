import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Section } from '../../shared';
import { get } from 'lodash';

@Component({
  selector: 'app-section-admin',
  templateUrl: './section-admin.component.html',
  styleUrls: ['./section-admin.component.scss']
})
export class SectionAdminComponent implements OnInit {
  @Input()
  section: Section = new Section();

  @Output()
  save: EventEmitter<any> = new EventEmitter();
  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.section.title, Validators.required],
      description: [this.section.description, Validators.required],
      image: [this.section.image, Validators.required],
      allowsPosts: [this.section.allowsPosts, Validators.required]
    });
  }

  doSave({value, valid}) {
    if (valid) {
      this.save.emit(
        Object.assign({}, {id: get(this.section, 'id')}, value)
      );
    }
  }
}
