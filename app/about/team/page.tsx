import { Metadata } from "next";
import Link from "next/link";

type User = {
    name: string,
    email: string,
    id: number
}

export const metadata: Metadata = {
    title: "About | Team",
  };

 async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    return response.json()
  }
  

export default async function Team() {
    const users = await getUsers() 
    return (
        <>
        <h3>Our team</h3>
        <ul>
        {users.map((user: User) => (
            <li key={user.id}>
                <Link href={`/about/team/${user.id}`}>
                    <div>Name: {user.name}</div>
                    <div>email: {user.email}</div>
                </Link>
            </li>
        ))}
        </ul>
        </>


    )
}