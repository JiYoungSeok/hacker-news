<template>
  <div>
    <div v-for="(job, key) in fetchedJobs" :key="key">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>
