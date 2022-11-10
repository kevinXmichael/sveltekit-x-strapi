<script lang="ts">
  import type { Article as ArticleType } from "@/stores/data"
  import type { PageData } from "./$types"
  import { page } from "$app/stores"
  export let data: PageData & ArticleType[] = []
  console.log("data is", data)
</script>

<section>
  {#each data.articles as article}
    <a href={`/articles/${article.id}`}>{article.title}</a>
  {:else}
    <h2>No articles found for tag '{$page.params?.tag}'</h2>
  {/each}
</section>

<style>
  a {
    padding-right: 1rem;
  }
</style>
