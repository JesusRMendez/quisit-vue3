<!-- src/components/PostList.vue -->
<template>
  <div>
    <p v-if="loading">Cargando...</p>
    <ul v-if="!loading && data">
      <li v-for="post in data" :key="post.id">{{ post.title }}</li>
    </ul>
    <p v-if="error">Error al cargar: {{ error.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '../composables/useFetch'

const { data, error, loading } = useFetch<{ id: number; title: string }[]>('https://jsonplaceholder.typicode.com/posts')
</script>