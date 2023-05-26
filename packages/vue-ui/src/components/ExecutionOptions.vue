<template>
    <div>
      <button v-for="(option, index) in options" :key="index" @click="executeOption(option)">
        {{ option }}
      </button>
    </div>
  </template>
  
<script lang="ts">
  export default {
    props: ['options'],
    methods: {
      executeOption(option) {
        this.$emit('executeOption', option);
      }
    }
  }
  </script>
  