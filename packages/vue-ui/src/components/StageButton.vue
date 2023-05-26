<template>
    <!-- Component Markup -->
  </template>
  
<script lang="ts">
  import { ref } from 'vue';
  
  export default {
    props: ['stageName', 'isActive'],
    setup(props, { emit }) {
      const handleClick = () => {
        emit('changeStage', props.stageName);
      };
  
      return { handleClick };
    }
  }
  </script>
  