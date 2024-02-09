'use client'
import { useEffect } from "react"
import Link from "next/link"
import { usePostStore } from "@/app/store"
import { Props } from '@/app/types';


export default function Post({params: {id}} : Props) {
    const post = usePostStore(state => state.post)
    const fetchPost = usePostStore(state => state.fetchPost)

    useEffect(() => {
        fetchPost(id)
    })

    return (
        <>
        <button className="back">
            <Link  href={'/blog'}>Back</Link>
        </button>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
        </>
    )
}