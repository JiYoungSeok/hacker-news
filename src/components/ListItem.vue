<template>
  <ul class="items-list">
    <li v-for="(item, key) in listItems" :key="key" class="post">
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="item-title">
          <a :href="item.url" v-if="item.domain">
            {{ item.title }}
          </a>
          <router-link :to="`/item/${item.id}`" v-else>
            {{ item.title }}
          </router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by 
          <router-link :to="`/user/${item.user}`" class="link-text" v-if="item.user">
            {{ item.user }}
          </router-link>
          <a :href="item.url" class="link-text" v-else>
            {{ item.domain }}
          </a>
        </small>
      </div>
    </li>
  </ul>  
</template>

<script>
export default {
  computed: {
    name() {
      return this.$route.name
    },
    listItems() {
      switch (this.name) {
        case 'news':
        return this.$store.state.news

        case 'ask':
      return this.$store.state.ask

        case 'jobs':
        return this.$store.state.jobs

        default:
        return []
      }
    }
  }
}
</script>

<style scoped>
.items-list {
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

.item-title {
  margin: 0px;
}

.link-text {
  color: #828282;
}
</style>
