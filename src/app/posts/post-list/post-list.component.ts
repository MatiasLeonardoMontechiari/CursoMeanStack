import { Component, Input } from '@angular/core';
// importo la defiicion de como se debe ver el Post
import { Post } from '../post.model';


@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts =  [
  //  {title: 'Primer Post', content: 'Este es el primer post!!'},
  //  {title: 'Segundo Post', content: 'Este es el segundo post!!'},
  //  {title: 'Tercer Post', content: 'Este es el tercer post!!'}
  //   ];
  @Input() posts: Post[] = [];
}
