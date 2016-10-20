<template>
  <div class="form-middle form-bordered">
    <h1 class="blog-title">{{ title }}</h1>
    <p class="blog-content">{{ content }}</p>
    <p class="blog-author">- {{ author }} | {{ createdAt }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      createdAt: {
        type: String,
        required: true
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
  .blog-title
    font-size:
</style>