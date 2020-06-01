import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  onAddPost(form: NgForm) {
    // Si el formulario es invalido devolvemos el control al llamado sin realizar la creacion del post
    if (form.invalid){
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
    // alert('Post Agregado!!!');
  }
}
