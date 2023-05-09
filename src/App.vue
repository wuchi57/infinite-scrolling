<script setup>
import InfiniteScrolling from 'components/InfiniteScrolling.vue'
</script>

<template>
  <h1>无限滚动组件</h1>
  <suspense>
    <InfiniteScrolling />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </suspense>
  <p>Made with <span>love</span> keyboard</p>
</template>

<style lang="sass" scoped>
p span
  text-decoration: line-through
</style>
