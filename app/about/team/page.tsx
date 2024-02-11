import { Metadata } from "next";
import UsersList from "@/components/UsersList";

export const metadata: Metadata = {
  title: "About page | Team",
};

export default function Team() {
  return (
    <>
      <h3>Our team</h3>
      <ul>
       <UsersList/>
      </ul>
    </>
  );
}