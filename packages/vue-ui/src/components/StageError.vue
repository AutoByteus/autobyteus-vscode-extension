<template>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </template>
  
<script lang="ts">
  export default {
    props: ['errorMessage']
  }
</script>
  