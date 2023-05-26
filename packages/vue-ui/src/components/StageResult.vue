<template>
    <div>
      {{ result }}
      <!-- Include chart component here when result is available -->
    </div>
  </template>
  
<script lang="ts">
  export default {
    props: ['result']
}
</script>
  