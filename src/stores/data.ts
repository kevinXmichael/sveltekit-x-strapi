import { writable } from "svelte/store"

export interface Article {
  id: string
  img: string
  title: string
  body: string
  tags?: string[]
}

export const articles = writable<Article[]>([
  { id: "1", img: "", title: "Lorem ipsum", body: "", tags: ["info"] },
  { id: "2", img: "", title: "Test test", body: "", tags: ["info", "new"] },
  { id: "3", img: "", title: "Thats it", body: "", tags: ["info", "legal"] },
  { id: "4", img: "", title: "I am here", body: "", tags: ["info"] }
])
