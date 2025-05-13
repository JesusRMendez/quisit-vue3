<!-- src/components/UserForm.vue -->
<template>
  <form @submit.prevent="submitForm">
    <label>
      Nombre:
      <input v-model="form.name" type="text" />
    </label>
    <label>
      Email:
      <input v-model="form.email" type="email" />
    </label>
    <button type="submit">Enviar</button>
    <button type="button" @click="reset">Reset</button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '../composables/useForm'

const { form, reset } = useForm({ name: '', email: '' })

function submitForm() {
  alert(`Enviado: ${form.value.name} - ${form.value.email}`)
}
</script>