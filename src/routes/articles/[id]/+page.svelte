<script lang="ts">
  import Article from "@/app/Article.svelte"
  export let data: Article
</script>

<Article {data} />
