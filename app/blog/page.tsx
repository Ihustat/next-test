
import {Metadata} from 'next'
import Link from 'next/link'

type Post = {
    id: number,
    title: string
}

async function getData () {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            next: {
                revalidate: 60
            }
        })

        if(!response.ok) throw new Error('Something gone wrong')

        return response.json()
}

export const metadata: Metadata = {
    title: 'Blog page'
}

export default async function Blog() {

    const posts = await getData()
    return (
        <>
    <h1 className='blog-title'>Blog page</h1>
    <ul className='list'>
        
        {posts.map((post: Post) => (
            <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
        ))}
    </ul>
    </>
    )
}