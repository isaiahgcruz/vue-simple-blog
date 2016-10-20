<template>
  <div class="container">
    <logout :user="user" v-if="user"></logout>
    <login v-if="!user"></login>
    <register v-if="!user"></register>
    <blog-list v-else></blog-list>
  </div>
</template>

<script>
  import Login from './Login'
  import Logout from './Logout'
  import Register from './Register'
  import BlogList from './blogs/BlogList'

  export default {
    components: { Login, Logout, Register, BlogList },
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
        this.$http.post('/api/users', payLoad)
          .then((response) => {
            this.user = response.body.decoded
          }, (response) => {
            this.user = false
          })
      }
    }
  }
</script>

<style lang="sass">
.container
  padding-right: 15%
  padding-left: 15%
  margin-right: auto
  margin-left: auto
button
  border-radius: 0px
  padding: 5px 10px 5px 10px
.form-group
  align-content: center
  margin-bottom: 10px
.form-control
  vertical-align: middle
  width: 100%
.form-middle
  margin-right: auto
  margin-left: auto
  margin-top: 10px
  margin-bottom: 10px
  align-content: center
  padding: 10px 30px 10px 30px
.form-bordered
  border: 1px solid black
</style>`
