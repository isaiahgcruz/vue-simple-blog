<template>
  <div>
    <logout :user="user" v-if="user"></logout>
    <login v-if="!user"></login>
    <blog-list v-else></blog-list>
  </div>
</template>

<script>
  import Login from './Login'
  import Logout from './Logout'
  import BlogList from './blogs/BlogList'

  export default {
    components: { Login, Logout, BlogList },
    data () {
      return {
        user: false
      }
    },
    mounted () {
      if (window.localStorage.getItem('id_token')) {
        this.getUserInfo()
      }
    },
    methods: {
      getUserInfo () {
        const payLoad = {
          token: window.localStorage.getItem('id_token')
        }
        this.$http.post('http://localhost:3000/accounts', payLoad)
          .then((response) => {
            this.user = response.body.decoded
          }, (response) => {
            this.user = false
          })
      }
    }
  }
</script>