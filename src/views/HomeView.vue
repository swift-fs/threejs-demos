<script setup lang="ts">
import RenderContent from '@/components/RenderContent/RenderContent.vue'
import basicInit from '@/funcs/001-basic'
import { onMounted } from 'vue'

onMounted(() => {
  basicInit()
})
</script>

<template>
  <div>
    <RenderContent></RenderContent>
  </div>
</template>
