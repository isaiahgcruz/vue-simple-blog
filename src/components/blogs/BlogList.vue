<template>
  <div>
    <add-blog></add-blog>
    <div class="form-middle">
      <h1 v-if="activeUser">{{ activeUser.username }}'s Blogs</h1>
      <h6 class="text-link" v-if="activeUser" @click="viewAllBlogs">View All</h6>
      <h1 v-else>All Blogs</h1>
    </div>
    <blog 
      v-for="blog in blogs" 
      :blog="blog"
    ></blog>
  </div>
</template>

<script>
  import Blog from './Blog'
  import AddBlog from './AddBlog'

  export default {
    components: { Blog, AddBlog },
    data () {
      return {
        blogs: {},
        activeUser: false
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        const apiUrl = (this.activeUser) ? 'api/users/' + this.activeUser._id + '/blogs' : '/api/blogs'
        this.$http.get(apiUrl)
          .then((response) => {
            this.blogs = response.body.blogs
          })
      },
      viewAllBlogs () {
        this.activeUser = false
        this.fetchData()
      }
    }
  }
</script>

<style lang="sass">
  .text-link
    cursor: pointer
    text-decoration: underline
</style>