<template>
  <div>
    <p v-for="(news, key) in fetchedNews" :key="key">
      <a :href="news.url">{{ news.title }}</a>
      <small>
        {{ news.time_ago }} by 
        <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>
