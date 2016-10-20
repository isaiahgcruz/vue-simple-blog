<template>
  <div>
    <div>
      <label for="title">Title: </label>
      <input type="text" name="title" v-model="title"/>
    </div>
    <div>
      <label for="content">Content: </label>
      <input type="text" name="content" v-model="content"/>
    </div>
    <div>
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