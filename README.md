## Hide API keys

Source: https://vitejs.dev/guide/env-and-mode.html

- Use an .env file
- Create an .env.example file for others in the project
- Add .env file to .gitignore
- Always prefix them with `VITE_` in a Vite project
- Access .env keys via `import.meta.env.VITE_SOME_KEY` in your projects

## Nested layouts and routing

Routing is just folder based, if you create a path like `/articles/[id]` all articles can be found on your website like so: `website.com/articles/1234` (where 1234 is the `id`).

Nested layouts work the same, you can create a global layout for all files in your root folder `/+layout.svelte`. Each subfolder can have nested layouts as well if you create it in there like `/articles/+layout.svelte`. Don't forget to always add a `<slot />` in your layouts, otherwise the content cannot be displayed inside it.

## Reset layouts

As far as I know it is not possible anymore, but a "workaround" is using groups instead of a global layout: https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-layout

Another idea is to just use Svelte Components over layouts in some cases and don't use a global layout at all.

## Fetch or prefetch data

There are two concepts:

1. Fetch with `+page.ts` which can kind of block the UI because of SSR but can be great if you just want to pass and handle local (or already fetched) data:

```javascript
export const load: PageLoad = ({ params }) => {
  const article = get(articles).find((article) => article.id == params.id)
  if (article) {
    return article
  }
  throw error(404, "Article not found")
}
```

If you access that data in your component always name it as `data` otherwise SvelteKit will not find it.

2. Fetch in a SvelteKit component (or over a store) which increases client loading, but is good as you can show it to the user:

```javascript
export const groups = writable<GroupData[]>([])
export const loadingGroups = writable(false)
export const loadedGroups = writable(false)

export async function loadGroups() {
  if (get(loadedGroups) || get(loadingGroups)) {
    return false
  }
  try {
    loadingGroups.set(true)
    const response = await fetch("/api/groups", {
      method: "GET",
      headers: {
        "x-access-token": getUserToken()
      }
    })
    const groupData: GroupData[] = await response.json()
    if (groupData.message) {
      return error(groupData.message)
    } else {
      groups.set(groupData)
    }
    loadedGroups.set(true)
  } catch (err) {
    console.error(`??? Smth went wrong in loadGroups: ${err}`)
  } finally {
    loadingGroups.set(false)
  }
}
```
