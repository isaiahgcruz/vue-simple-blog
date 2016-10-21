<template>
  <nav>
    <ul>
      <li><a class="active a-cursor" href="#">Simple Blog</a></li>
      <li v-if="user" style="float: right; cursor: pointer"><a @click="logout">Logout</a></li>
      <li v-if="user" style="float: right"><a>Logged in as: {{ user.username }}</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      user: {
        required: true
      }
    },
    methods: {
      logout () {
        window.localStorage.removeItem('id_token')
        window.location.reload()
      }
    }
  }
</script>

<style lang="sass">
nav
  margin-bottom: 15px
  ul
    list-style-type: none
    margin: 0
    padding: 0
    overflow: hidden
    background-color: #333
  li
    float: left
  li a
    display: block
    color: white
    text-align: center
    padding: 14px 16px
    text-decoration: none
  li a:hover
    background-color: #111
  .a-cursor
    cursor: pointer
</style>