import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Instead of importing service and including in app.module providers
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // Takes all elements of another array and adds them to the new array. Copying the original array.
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title,
      content
    };
    this.posts.push(post);
    // Emmits the copy of the posts.
    this.postsUpdated.next([...this.posts]);
  }

}
