<template>
  <div>
    <user-profile>
      <div slot="username">{{ fetchedUser.id }}</div>
      <template slot="time">{{ fetchedUser.created }}</template>
      <div slot="karma">{{ fetchedUser.karma }}</div>
    </user-profile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '@/components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters([
      'fetchedUser'
    ])
  },
  created() {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>

</style>
