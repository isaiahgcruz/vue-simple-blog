<template>
  <div class="form-middle form-bordered">
    <div class="form-group">
      <label class="form-control" for="title">Title: </label>
      <input class="form-control" type="text" name="title" v-model="title"/>
    </div>
    <div class="form-group">
      <label class="form-control" for="content">Content: </label>
      <textarea class="form-control" type="text" name="content" v-model="content"></textarea>
    </div>
    <div class="form-group">
      <button @click="addBlog">Add Blog</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      addBlog () {
        const blogData = {
          title: this.title,
          content: this.content
        }
        this.$http.post('http://localhost:3000/blogs/', blogData)
          .then((response) => {
            this.$parent.fetchData()
          })
      }
    }
  }
</script>