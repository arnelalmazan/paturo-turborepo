import Image, { type ImageProps } from "next/image"
import { Button } from "@repo/ui/button"
import { User } from "@repo/types"
import styles from "./page.module.css"
import { getUsers } from "../server/users"

export default async function Home() {
  const users: User[] = await getUsers()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
