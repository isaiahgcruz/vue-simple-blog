<template>
  <div>
    <div>
      <label for="username">Username: </label>
      <input type="text" name="username" v-model="username"/>
    </div>
    <div>
      <label for="password">Password: </label>
      <input type="password" name="password" v-model="password"/>
    </div>
    <div>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        const loginData = {
          username: this.username,
          password: this.password
        }
        this.$http.post('http://localhost:3000/login', loginData)
          .then((response) => {
            window.localStorage.setItem('id_token', response.body.token)
            window.location.reload()
          })
      }
    }
  }
</script>