'use client'
import Link from 'next/link'
import { usePostsStore } from '@/app/stores/postsStore';
import { Post } from '@/app/types';
import { useEffect } from 'react';

export default function PostsList() {

    const {posts, isLoading, fetchPosts} = usePostsStore()
  
    useEffect(() => {
        fetchPosts()
    }, [])


    return (
       <>
       {
         posts.map((post: Post) => (
            <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
        ))
       }
       
       </>
    )
}