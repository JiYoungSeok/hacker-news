<template>
  <div>
    <div v-for="(item, key) in this.$store.state.news" :key="key">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>
