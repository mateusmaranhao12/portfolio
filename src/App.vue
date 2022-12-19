<template>
  <Header></Header>
  <router-view />
</template>

<script>

  import Header from '@/components/Header/Header'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  body {
    background: rgb(54, 54, 54);
  }
</style>