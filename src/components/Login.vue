<template>
  <div>
    <h2>Login</h2>
    <div class="form-middle form-bordered">
      <div class="form-group">
        <label class="form-control" for="username">Username: </label>
        <input class="form-control" type="text" name="username" v-model="username"/>
      </div>
      <div class="form-group">
        <label class="form-control" for="password">Password: </label>
        <input class="form-control" type="password" name="password" v-model="password"/>
      </div>
      <div class="form-group">
        <button @click="login">Login</button>
      </div>
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
          }, (response) => {
            window.alert('Invalid login')
          })
      }
    }
  }
</script>