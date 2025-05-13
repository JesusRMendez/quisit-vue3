<template>
  <div>
    <h1>Phase 3 - Composition API with Typescript</h1>
    <Counter :start="5" @limitReached="handleLimit" />
    <CounterTS :start="5" @limitReached="handleLimit" />
    
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import CounterTS from './components/CounterTS.vue';

export default {
  components: {  CounterTS, Counter },
  methods: {
    handleLimit(value) {
      alert(`¡Límite alcanzado con valor: ${value}!`)
    }
  }
}
</script>

<!-- <CounterTS :start="5" @limitReached="handleLimit" />  -->