<template>
  <div class="page" data-inset="1rem">
    <div class="row horizontal v_center">
      <el-button type="primary" @click="reRender">Re Render</el-button>
    </div>
    <childComponent :text="oldText" />
  </div>
</template>

<script>
import {
  ref,
  reactive, 
  computed,
  onMounted,
  provide,
  readonly
} from 'vue'
import childComponent from '@/components/Child_inject.vue'
export default {
  name: 'Provide',
  components: {
    childComponent
  },
  setup() {
    // v-models
    let config = reactive({})
    let oldText = ref('old text')
    const newObj = reactive({})
    // methods
    const getConfig = onMounted(async () => {
      await fetch('http://localhost:8080/config.json').then(res => res.json()).then(res => {
        config = {...res}
      })
      console.log('###root: ', config)
    })
    
    const reRender = () => {
      console.log(config.baseUrl)
      oldText.value = config.baseUrl
      newObj.name = config.name
      newObj.child = config.child
      newObj.baseUrl = config.baseUrl
    }

    provide('rootObj', newObj)
    provide('rootText', oldText)

    return {
      config,
      oldText,
      getConfig,
      newObj,
      reRender
    }
  }
}
</script>
