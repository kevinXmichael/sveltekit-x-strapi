import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit"
import { articles } from "@/stores/data"
import { get } from "svelte/store"

export const load: PageLoad = ({ params }) => {
  console.log("params are", params)

  const article = get(articles).find((article) => article.id == params.id)
  if (article) {
    return article
  }

  throw error(404, "Article not found")
}
