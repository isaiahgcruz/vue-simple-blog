<template>
  <div>
    <h2>Register</h2>
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
        <button @click="register">Register</button>
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
      register () {
        const registerData = {
          username: this.username,
          password: this.password
        }
        this.$http.post('/api/register', registerData)
          .then((response) => {
            window.localStorage.setItem('id_token', response.body.token)
            window.alert('Account successfully created')
            window.location.reload()
          }, (response) => {
            window.alert('Invalid registration')
          })
      }
    }
  }
</script>