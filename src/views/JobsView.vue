<template>
  <div>
    <div v-for="(job, key) in this.$store.state.jobs" :key="key">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>
