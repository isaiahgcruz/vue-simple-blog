<template>
  <div>
    <add-blog></add-blog>
    <blog v-for="blog in blogs" :content="blog.content" :title="blog.title" author="author"></blog>
  </div>
</template>

<script>
  import Blog from './Blog'
  import AddBlog from './AddBlog'

  export default {
    components: { Blog, AddBlog },
    data () {
      return {
        blogs: {}
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.$http.get('http://localhost:3000/blogs')
          .then((response) => {
            this.blogs = response.body.blogs
          })
      }
    }
  }
</script>