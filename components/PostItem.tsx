'use client'
import { useEffect } from "react"
import { IdProps } from '@/app/types';
import { usePostStore } from "@/app/stores/postsStore";

export default function PostItem(props: IdProps) {
    const {post, fetchPost} = usePostStore()

    useEffect(() => {
        fetchPost(props.id)
    }, [])

    return (
        <>
        <div>{post.title}</div>
        <div>{post.body}</div>
        </>
    )
}

