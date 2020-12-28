<template>
  <div>
    <div v-for="(item, key) in this.$store.state.ask" :key="key">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>
