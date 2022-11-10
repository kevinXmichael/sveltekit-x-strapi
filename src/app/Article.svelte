<script lang="ts">
  import type { Article } from "@/stores/data"
  export let data: Article
  console.log(data)
</script>

{#if data}
  <h1>{data.title}</h1>
  <img src={data.img} alt="data" />
  <article>{data.body}</article>
{/if}
