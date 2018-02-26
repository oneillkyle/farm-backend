import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Section, Post } from '../../shared';
import { get } from 'lodash';

@Component({
  selector: 'app-section-admin',
  templateUrl: './section-admin.component.html',
  styleUrls: ['./section-admin.component.scss']
})
export class SectionAdminComponent implements OnInit {
  @Input()
  section: Section = new Section();
  @Input()
  posts: Post[];

  @Output()
  opened: EventEmitter<any> = new EventEmitter();
  @Output()
  save: EventEmitter<any> = new EventEmitter();
  @Output()
  delete: EventEmitter<any> = new EventEmitter();
  @Output()
  savePost: EventEmitter<any> = new EventEmitter();
  @Output()
  deletePost: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.section.title, Validators.required],
      description: [this.section.description, Validators.required],
      image: [this.section.image],
      allowsPosts: [this.section.allowsPosts || false, Validators.required]
    });
  }

  doSave({value, valid}) {
    if (valid) {
      this.save.emit(
        Object.assign({}, {id: get(this.section, 'id')}, value)
      );
    }
  }

  doSavePost(post) {
    this.savePost.emit(Object.assign({}, post, {section: this.section.id}));
  }
}
