import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';

@Component ( {
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
// Al usar el modelo Post en el emisor siendo una publicacion con otro formado tendremos un error
// de esta forma nos aseguramos de mantener la coherencia de formato con el model.
  @Output() postCreated = new EventEmitter<Post>();
// funcion al grabar el post, se usa On cuando el evento activa algo.
  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
    // alert('Post Agregado!!!');
  }
}
