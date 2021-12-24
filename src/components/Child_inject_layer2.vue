<template>
  <div class="row vertical" data-inset="1rem">
    <div>{{ 'layer 2: ' + text }}</div>
    <div>{{ 'layer 2 URL: ' + obj.baseUrl }}</div>
  </div>
  <layer3 :text="obj.child" />
</template>

<script>
import { reactive, computed, inject } from 'vue'
import layer3 from '@/components/Child_inject_layer3.vue'
export default {
  name: 'ChildInjectLayer2',
  props: {
    text: String,
  },
  components: {
    layer3
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
      defaultText,
    }
  }
}
</script>