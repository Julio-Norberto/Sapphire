import { useRouter } from "next/router"

export default function Post() {
  const { query } = useRouter()

  return (
    <div>
      Post ID: {query.id}
    </div>
  )
}