<template>
  <div class="row vertical" data-inset="1rem">
    <div>{{ 'layer 2: ' + text }}</div>
    <div>{{ 'layer 2 URL: ' + obj.baseUrl }}</div>
  </div>
</template>

<script>
import { reactive, computed, inject } from 'vue'
export default {
  name: 'ChildInjectLayer2',
  props: {
    text: String,
  },
  setup() {
    const rootObj = inject('rootObj')
    const obj = computed(() => {
      return rootObj
    })

    return {
      obj
    }
  }
}
</script>