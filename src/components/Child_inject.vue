<template>
  <div class="row vertical" data-inset="1rem">
    <el-button @click="check">check child data</el-button>
    <div>{{ 'layer 1: ' + text }}</div>
  </div>
  <layer2 :text="obj.name" />
</template>

<script>
import { inject, reactive, computed, onMounted, compile } from 'vue'
import layer2 from '@/components/Child_inject_layer2.vue'
export default {
  name: 'ChildInject',
  props: {
    text: String
  },
  components: {
    layer2
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

    const check = () => {
      console.log('### child check: ', obj.value.name, rootObj.name)
    }

    return {
      obj,
      defaultText,
      check
    }
  }
}
</script>