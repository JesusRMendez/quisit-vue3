# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


# Add Dependencies for vue 3 testing (4)

```bash
npm install -D vitest @vue/test-utils@2 @vitejs/plugin-vue @testing-library/vue jsdom
npm install -D @vitest/ui @types/jest @types/jsdom
```

also add to vite.js config the following:

```
alias: {
    '@': path.resolve(__dirname, './src')
  }
```

# Add vitest.config.ts to the project
```ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
})
```

# Add vitest and vitest/ui to devDependencies
```bash
npm install -D vitest @vitest/ui
```

# Create the testings for useCounter
(The component useCounter is already created in the src/components folder)


# Create a new file testing for the useForm for later create the useForm composable

# Create the new file in the src/components folder UseForm for view in UI

# Create the new file for testing component UseForm.tests.ts

# Create the new file for testing composable useFetch testing

# Create the new file for testing composable useFetch.ts

# Create the new file for testing composable useFetch.tests.ts

# Watch Effect create the testing component userFech.test.ts

# Create the new file component UserFetcher


