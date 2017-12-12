import { BadInput } from './../common/bad-request';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  data: any[];

  constructor(private service: PostsService) {
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
                .subscribe(response => {
                  post['id'] = response.id;
                  this.data.splice(0, 0, post)
                });
  }

  updatePost(post) {
    this.service.update(post).subscribe(d => console.log(d));
    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.service.delete(post.id)
    .subscribe( () => {
      let index = this.data.indexOf(post);
      this.data.splice(index, 1);
    }, error => {
      if (error instanceof NotFoundError)
        alert("This post has already been deleted.");
      else throw error;
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe(d => this.data = d);
  }
}
