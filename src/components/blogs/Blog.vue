<template>
  <div class="form-middle form-bordered">
    <div class="form-group" v-if="toEdit">
      <label class="form-control" for="title">Title: </label>
      <input class="form-control" type="text" name="title" v-model="title"/>
    </div>
    <h1 class="blog-title" v-else>{{ blog.title }}</h1>
    <div class="form-group" v-if="toEdit">
      <label class="form-control" for="content">Content: </label>
      <textarea class="form-control" type="text" name="content" v-model="content"></textarea>
    </div>
    <p class="blog-content" v-else>{{ blog.content }}</p>
    <div class="form-group" v-if="toEdit">
      <button @click="updateBlog">Update Blog</button>
    </div>
    <p
      class="blog-author text-link"
      @click="changeActiveUser(blog._user)"
    >- {{ blog._user.username }} | {{ blog.createdAt }}</p>
    <span>
      <span 
        class="blog-like text-link text-right" 
        @click="toggleLike(blog)"
      >{{ (toLike) ?  'Like' : 'Unlike '}} {{ likeString }}</span> <br/>
      <span 
        class="blog-like text-link" 
        v-if="blog._user._id === user.id"
        @click="editBlog"
      >Edit</span>
      <span 
        class="blog-like text-link" 
        v-if="blog._user._id === user.id"
        @click="deleteBlog(blog)"
      >Delete</span>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      blog: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        user: this.$parent.$parent.user,
        toEdit: false,
        content: '',
        title: ''
      }
    },
    computed: {
      likeString () {
        const likers = this.blog.likers
        let likeString = (likers.length) ? '| ' : ''
        if (likers.length >= 3) {
          likeString += likers[0].username + ', ' + likers[1].username +
          ' and ' + (likers.length - 2) + ' other people like this'
        } else if (likers.length === 2) {
          likeString += likers[0].username + ' and ' + likers[1].username + ' like this'
        } else if (likers.length === 1) {
          likeString += likers[0].username + ' likes this'
        }
        return likeString
      },
      toLike () {
        const likers = this.blog.likers
        for (let key in likers) {
          if (likers[key]._id === this.user.id) {
            return false
          }
        }
        return true
      }
    },
    methods: {
      changeActiveUser (user) {
        this.$parent.activeUser = user
        this.$parent.fetchData()
      },
      toggleLike (blog) {
        const apiUrl = (this.toLike) ? 'api/blogs/' + blog._id + '/like' : 'api/blogs/' + blog._id + '/unlike'
        this.$http.post(apiUrl)
          .then((response) => {
            this.$parent.fetchData()
          })
      },
      deleteBlog (blog) {
        this.$http.delete('api/blogs/' + blog._id)
          .then((response) => {
            this.$parent.fetchData()
          })
      },
      editBlog () {
        this.toEdit = true
        this.title = this.blog.title
        this.content = this.blog.content
      },
      updateBlog () {
        const blogData = {
          title: this.title,
          content: this.content
        }
        this.$http.put('/api/blogs/' + this.blog._id, blogData)
          .then((response) => {
            this.$parent.fetchData()
            this.toEdit = false
          })
      }
    }
  }
</script>

<style lang="sass">
  .blog
    border: 1px solid black
    margin: 10px
    padding: 10px
  .blog-author
    text-align: right
    font-size: 0.7em
  .blog-content
    height: auto;
    word-wrap: break-word; /* IE */
    word-break: break-all;
    font-size: 1em
  .blog-like
    text-align: right
    font-size: 0.7em
</style>