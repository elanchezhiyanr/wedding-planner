
<template>
  <div class="min-h-screen bg-background">
    <main class="container mx-auto py-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
</lov-code>

To fix the first error, you need to add a "build:dev" script to your package.json file. Since we can't modify package.json directly through this interface, you'll need to do this manually:

1. Open your package.json file
2. Find the "scripts" section
3. Add this line: `"build:dev": "vite build --mode development"`

For example, your scripts section might look like:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "preview": "vite preview"
}
```

Also, update the vite.config.ts to use port 8080 instead of 3000:

<lov-code>
<lov-write file_path="vite.config.ts">
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080
  },
  build: {
    outDir: 'dist'
  }
})
