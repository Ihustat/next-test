import { create } from 'zustand';

import {  PostsState, PostState } from '@/app/types';



export const usePostsStore = create<PostsState>((set) => ({
    posts: [],
    fetchPosts: async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const result = await response.json();
        set({ posts: result});
      } catch (error) {
        console.error('Error fetching users:', error);
      } 
    },
  }));



  export const usePostStore = create<PostState>((set) => ({
    post: {
        id: 0,
        title: '',
        body: ''
    },
    fetchPost: async (id: number) => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const result = await response.json();
          set({ post: result });
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
  }))