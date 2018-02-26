import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../datatypes';
import { get, omit } from 'lodash';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
    `
    .mat-card-title {
      font-size: 24px;
    }

    .mat-card-subtitle {
      padding-left: 2px;
    }

    .mat-card-content {
    }

    .post-submits {
      margin-top: 15px;
      margin-left: 5px;
    }

    .post-actions {
      margin-left: 10px;
    }

    .header-actions {
      flex: 1 1 auto;
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
    }

    .post-form {
      border-bottom: black 1px solid;
      margin-bottom: 60px;
    }

    .truncate {
      max-height: 250px;
      overflow-y: hidden;
    }`
  ],
  providers: [],
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  @Input()
  enableEdit = false;
  @Input()
  enableDelete = false;
  @Input()
  noHeader = false;
  @Input()
  truncate = false;
  @Input()
  editingPost = false;
  @Input()
  newPost = false;
  @Output()
  onPostSave: EventEmitter<any> = new EventEmitter();
  @Output()
  onDeletePost: EventEmitter<any> = new EventEmitter();
  @Output()
  onCancelEdit: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (!this.post) {
      this.editingPost = true;
      this.newPost = true;
      this.post = new Post();
    }
  }

  editPost() {
    this.editingPost = true;
  }

  createOrUpdatePost() {
    // this.post.date = new Date(this.formattedDate).getTime();
    this.onPostSave.emit({
      key: get(this.post, 'key', null),
      post: omit(this.post, 'key')
    });
    if (this.newPost) {
      this.post = {};
    } else {
      this.editingPost = false;
    }
  }

  deletePost() {
    if (confirm('Are you sure you want to delete?')) {
      this.onDeletePost.emit({
        key: get(this.post, 'id', null)
      });
    }
  }

  cancelEdit() {
    this.editingPost = false;
    this.onCancelEdit.emit(this.post);
  }

  transformTime(time) {
    const timeStamp = new Date(time);
    return timeStamp.toLocaleDateString() + ' ' + timeStamp.toLocaleTimeString();
  }
};
