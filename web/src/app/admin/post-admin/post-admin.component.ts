import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Post } from '../../shared';
import { get } from 'lodash';

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html'
})
export class PostAdminComponent implements OnInit {
  @Input()
  post: Post = new Post();

  @Output()
  save: EventEmitter<any> = new EventEmitter();
  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.post.title, Validators.required],
      description: [this.post.description, Validators.required],
      image: [this.post.image],
      publishDate: [this.post.publishDate]
    });
  }

  doSave({value, valid}) {
    if (valid) {
      this.save.emit(
        Object.assign({}, {id: get(this.post, 'id')}, value)
      );
    }
  }
}
