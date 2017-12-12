import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { port } from '_debugger';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  data: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
     http.get(this.url)
        .subscribe(response => {
          this.data = response.json()
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.http.get(this.url, JSON.stringify(post))
            .subscribe(response => {
              post['id'] = response.json().id;
              this.data.splice(0, 0, post)
            });0
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id , JSON.stringify({ isRead: true }))
              .subscribe(response => {
                console.log(response.json());
              });
    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {

      let index = this.data.indexOf(post);
      this.data.splice(index, 1);
    });
  }

  ngOnInit() {
  }

}
