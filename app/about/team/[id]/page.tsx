import { Metadata } from "next"


type Props = {
    params: {
        id: string
    }
}



async function getUser (id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    return response.json()
}

export async function generateMetadata({params: {id}} : Props): Promise<Metadata> {
    const user = await getUser(id)
    return {
        title: `About | Team | ${user.name}`,
    }
}

export default async function Team({params: {id}} : Props) {

    const user = await getUser(id)
    return  <div>{user.name}</div>

}