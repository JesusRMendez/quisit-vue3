<template>
  <div>
    <h1>Composition API with Typescript</h1>
    <!-- <Counter :start="5" @limitReached="handleLimit" />
    <CounterTS :start="5" @limitReached="handleLimit" /> -->
    <!-- <UserForm /> -->
    <!-- <h2>Post List Fetch</h2> -->
    <!-- <PostList />-->
     <UserFetcher />
    
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import CounterTS from './components/CounterTS.vue';
import PostList from './components/PostList.vue';
import UserFetcher from './components/UserFetcher.vue';
import UserForm from './components/UserForm.vue';
export default {
  components: {  CounterTS, Counter, UserForm, PostList, UserFetcher },
  methods: {
    handleLimit(value) {
      alert(`¡Límite alcanzado con valor: ${value}!`)
    }
  }
}
</script>

<!-- <CounterTS :start="5" @limitReached="handleLimit" />  -->