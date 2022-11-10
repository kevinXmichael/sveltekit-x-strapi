import type { UserConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import path from "path"

const config: UserConfig = {
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}

export default config
