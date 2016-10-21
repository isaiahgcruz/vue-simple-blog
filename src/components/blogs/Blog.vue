<template>
  <div class="form-middle form-bordered">
    <h1 class="blog-title">{{ blog.title }}</h1>
    <p class="blog-content">{{ blog.content }}</p>
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
        @click="deleteBlog(blog)"
      >Delete blog</span>
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
        user: this.$parent.$parent.user
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