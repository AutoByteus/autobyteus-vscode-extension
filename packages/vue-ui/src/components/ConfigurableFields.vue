<template>
  <div>
    <div v-for="(field, index) in fields" :key="index">
      <input v-model="field.value" @input="updateField(index, ($event.target as HTMLInputElement).value)" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['fields'],
  methods: {
    updateField(index: number, newValue: string) {
      this.$emit('updateField', { index, newValue });
    }
  }
}
</script>
