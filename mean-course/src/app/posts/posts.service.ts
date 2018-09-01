import { Post } from './post.model';
import { Injectable } from '@angular/core';

// Instead of importing service and including in app.module providers
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    // Takes all elements of another array and adds them to the new array. Copying the original array.
    return [...this.posts];
  }

  addPosts(title: string, content: string) {
    const post: Post = {
      title,
      content
    };
    this.posts.push(post);
  }

}
