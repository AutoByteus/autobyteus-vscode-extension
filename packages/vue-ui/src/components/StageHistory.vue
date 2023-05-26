<template>
    <div>
      <div v-for="(item, index) in history" :key="index">
        {{ item }}
      </div>
    </div>
  </template>
  
<script lang="ts">
  export default {
    props: ['history']
  }
</script>
  