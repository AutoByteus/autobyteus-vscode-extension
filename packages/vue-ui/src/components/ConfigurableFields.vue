<template>
    <div>
      <div v-for="(field, index) in fields" :key="index">
        <input v-model="field.value" @input="updateField(index, $event.target.value)" />
      </div>
    </div>
  </template>
  
<script lang="ts">
  export default {
    props: ['fields'],
    methods: {
      updateField(index, newValue) {
        this.$emit('updateField', { index, newValue });
      }
    }
  }
  </script>
  