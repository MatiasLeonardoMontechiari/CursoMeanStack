import { Component, Input } from '@angular/core';

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
  @Input() posts = [];
}
