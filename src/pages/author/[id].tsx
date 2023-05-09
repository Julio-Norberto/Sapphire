import { useRouter } from "next/router"

export default function Author() {
  const { query } = useRouter()

  return (
    <div>
      <h1>Author {query.id} </h1>
    </div>
  )
}