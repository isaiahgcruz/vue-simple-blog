<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <sub>{{ author }}</sub>
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
      }
    }
  }
</script>