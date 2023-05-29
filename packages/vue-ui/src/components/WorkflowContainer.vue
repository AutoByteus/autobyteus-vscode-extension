<template>
  <div class="workflow-container">
    <button @click="startWorkflow">Start Workflow</button>
    <div class="stages">
      <StageButton v-for="(stage, index) in stages" :key="index" :stage="stage" @click="selectStage(index)" />
    </div>
    <ProgressIndicator :currentStage="currentStage" :stages="stages" />
    <!--
    <StageDetail :stage="currentStage" />
    -->
  </div>
</template>
  
<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import workflowService from '../services/WorkflowService'; // adjust the path as needed
import StageButton from './StageButton.vue';
import ProgressIndicator from './ProgressIndicator.vue';
import StageDetail from './StageDetail.vue';
import type { WorkflowCommand } from '../types/vscode';
import eventEmitter from "../services/EventEmitter";


export default {
  components: {
    StageButton,
    ProgressIndicator,
    StageDetail
  },
  setup() {
    const currentStage = ref(null);
    const stages = ref([]);

    const handleWorkflowStarted = (data: any)  => {
      stages.value = data;
    };

    onMounted(() => {
      eventEmitter.on('workflowStarted', handleWorkflowStarted);
    });

    onUnmounted(() => {
      eventEmitter.off('workflowStarted', handleWorkflowStarted);
    });

    const startWorkflow = () => {
      const startWorkflowCmd: WorkflowCommand = { name: 'startWorkflow'}
      workflowService.sendMessageToExtension(startWorkflowCmd);
    };

    const selectStage = (index: number) => {
      currentStage.value = stages.value[index];
    };

    return {
      currentStage,
      stages,
      startWorkflow,
      selectStage,
      // Other reactive properties...
    };
  }
  // Other methods, lifecycle hooks...
}
</script>
