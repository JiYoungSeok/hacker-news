<template>
  <div>
    <ul class="news-list">
      <li v-for="(news, key) in fetchedNews" :key="key" class="post">
        <div class="points">
          {{ news.points }}
        </div>
        <div>
          <p class="news-title">
            <a :href="news.url">{{ news.title }}</a>
          </p>
          <small class="link-text">
            {{ news.time_ago }} by 
            <router-link :to="`/user/${news.user}`" class="link-text">{{ news.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0px;
}

.link-text {
  color: #828282;
}
</style>
