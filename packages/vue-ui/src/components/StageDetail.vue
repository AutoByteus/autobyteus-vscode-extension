<template>
    <div>
      <ConfigurableFields :fields="currentStage.fields" @updateField="updateField" />
      <ExecutionOptions :options="currentStage.options" @executeOption="executeOption" />
      <StageError :errorMessage="currentStage.errorMessage" />
      <StageHistory :history="currentStage.history" />
      <StageResult :result="currentStage.result" />
    </div>
  </template>
  
<script lang="ts">
  import ConfigurableFields from './ConfigurableFields.vue';
  import ExecutionOptions from './ExecutionOptions.vue';
  import StageError from './StageError.vue';
  import StageHistory from './StageHistory.vue';
  import StageResult from './StageResult.vue';
  
  export default {
    components: {
      ConfigurableFields,
      ExecutionOptions,
      StageError,
      StageHistory,
      StageResult
    },
    props: ['currentStage'],
    methods: {
      updateField(newField: any) {
        console.log(newField)
        // Update field logic...
      },
      executeOption(option: any) {
        console.log(option)
        // Execute option logic...
      }
    }
  }
  </script>
  