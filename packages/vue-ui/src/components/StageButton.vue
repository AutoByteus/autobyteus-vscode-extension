<template>
    <!-- Component Markup -->
  </template>
  
<script lang="ts">  
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
  