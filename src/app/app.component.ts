import { Component } from '@angular/core';

// importo la defiicion de como se debe ver el Post
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Matriz de post almacenados (utilizando el modelo de post)
  storedPost: Post[]  = [];

  onPostAdded(post) {
    this.storedPost.push(post);
  }
}
