<template>
  <div class="page" data-inset="1rem">
    <div class="row horizontal v_center">
    <el-button type="primary" @click="getConfig">Click</el-button>
    <el-button type="primary" @click="check">Check Data</el-button>
    </div>
    <div>{{ newObj.baseUrl }}</div>
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
export default {
  name: 'Provide',
  components: {
  },
  setup() {
    let config = reactive({})
    let newObj = reactive({})
    const getConfig = async () => {
      await fetch('http://localhost:8080/config.json').then(res => res.json()).then(res => {
        config = {...res}
      })
    }
    const check = () => {
      newObj = {...config}
      console.log(config,newObj)
    }

    return {
      config,
      newObj,
      getConfig,
      check
    }
  }
}
</script>
