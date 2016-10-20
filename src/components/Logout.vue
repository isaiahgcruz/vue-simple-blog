<template>
  <div>
    <button @click="logout">{{ user.username }} | Logout</button>
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