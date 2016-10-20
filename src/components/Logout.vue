<template>
  <div class="form-logout">
    <button @click="logout" class="btn-logout">{{ user.username }} | Logout</button>
  </div>
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
        this.$parent.user = false
      }
    }
  }
</script>

<style lang="sass">
  .form-logout
    width: 100%
</style>