<script lang="ts">
  import { articles } from "@/stores/data"
</script>

<section style="margin-top: 2rem;">
  {#each $articles as article}
    <a href={`/articles/${article.id}`}>{article.title}</a>
  {/each}
</section>

<style>
  a {
    padding-right: 1rem;
  }
</style>
