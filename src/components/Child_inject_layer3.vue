<template>
  <div class="row vertical" data-inset="1rem">
    <div>{{ 'layer 3: ' + text }}</div>
    <div>{{ 'layer 3 URL: ' + obj.baseUrl }}</div>
  </div>
</template>

<script>
import { reactive, computed, inject } from 'vue'
export default {
  name: 'ChildInjectLayer3',
  props: {
    text: String
  },
  setup() {
    const rootObj = inject('rootObj')
    const rootText = inject('rootText')

    const obj = computed(() => {
      return rootObj
    })

    const defaultText = computed(() => {
      return rootText
    })
    return {
      obj,
      defaultText
    }
  }
}
</script>