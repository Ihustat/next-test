'use client'
import { useEffect } from "react"
import { IdProps } from '@/app/types';
import { usePostStore } from "@/app/stores/postsStore";

export default function PostItem(props: IdProps) {
    const {post, fetchPost, clearPost} = usePostStore()

    useEffect(() => {
        fetchPost(props.id)

        return () => {
            clearPost()
        }
    }, [])

    return (
        <>
        <div>{post.title}</div>
        <div>{post.body}</div>
        </>
    )
}

