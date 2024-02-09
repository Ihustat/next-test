import { Metadata } from "next"
import Link from "next/link"

async function getData (id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })

    return response.json()
}


type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}} : Props): Promise<Metadata> {
    const post = await getData(id)
    return {
        title: `Blog | post ${post.id}`,
    }
}

export default async function Post({params: {id}} : Props) {
    const post = await getData(id)


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