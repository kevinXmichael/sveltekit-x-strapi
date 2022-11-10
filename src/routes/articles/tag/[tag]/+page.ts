import type { Article } from "@/stores/data"
import type { PageLoad } from "./$types"
import { articles as articles_ } from "@/stores/data"
import { get } from "svelte/store"

export const load: PageLoad = ({ params }) => {
  console.log("params are", params)

  const articles: Article[] =
    get(articles_).filter((article) => article.tags?.includes(params.tag)) ?? []
  console.log("found articles?", articles)

  return { articles }
}
