'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePostsStore } from '@/app/store';
import { Post } from '../types';




export default  function Blog() {
    const posts = usePostsStore(state => state.posts)
    const fetchPosts = usePostsStore(state => state.fetchPosts)


    useEffect(() => {
        fetchPosts()
    })
    
    return (
        <>
    <h1 className='blog-title'>Blog page</h1>
    <ul>
        
        {posts.map((post: Post) => (
            <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
        ))}
    </ul>
    </>
    )
}