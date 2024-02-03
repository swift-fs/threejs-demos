<script setup lang="ts">
import RenderContent from '@/components/RenderContent/RenderContent.vue'
import basicInit from '@/funcs/001-basic'
import orbitControlsInit from '@/funcs/002-orbit-controls'
import axesHelpInit from '@/funcs/003-axes-help';
import positionInit from '@/funcs/004-position';
import scaleRotationInit from '@/funcs/005-scale-rotation';
import requestAnimationFrameInit from '@/funcs/006-request-animation-frame';
import clockInit from '@/funcs/007-clock';
import { onMounted } from 'vue'

onMounted(() => {
  // basicInit()
  // orbitControlsInit()
  // axesHelpInit()
  // positionInit()
  // scaleRotationInit()
  // requestAnimationFrameInit()

  clockInit()
})
</script>

<template>
  <div>
    <RenderContent></RenderContent>
  </div>
</template>
