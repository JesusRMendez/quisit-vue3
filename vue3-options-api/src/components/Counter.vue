<template>
  <div>
    <p>Contador: {{ count }}</p>
    <p>Doble: {{ double }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
export default {
  props: {
    start: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: this.start
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  methods: {
    incrementar() {
      this.count++
    }
  },
  watch: {
    count(newVal) {
      if (newVal >= 10) {
        this.$emit('limitReached', newVal)
      }
    }
  }
}
</script>