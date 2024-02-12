import {Post} from '@/entities/post';
import axios from 'axios';

const API_URL = 'http://localhost:3000/posts';

export async function fetchPosts() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function addPost(post: Post) {
  const response = await axios.post(API_URL, post);
  return response.status;
}
