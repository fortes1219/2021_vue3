<template>
  <div class="home" data-inset="1rem">
    <el-button type="primary" @click="changeText">Click</el-button>
  </div>
</template>

<script>
import {
  ref,
  toRefs,
  reactive, 
  computed,
  onMounted,
  onBeforeMount 
} from 'vue'
export default {
  name: 'Home',
  components: {
  },
  setup() {
    const sampleText = ref('Home Component.')
    let anotherText = reactive('Another Component.')
    const newObj = reactive({
      name: 'Ann',
      age: 20
    })
    const checkResult = onMounted(() => {
      console.log(sampleText, anotherText)
    })
    const changeText = () => {
      sampleText.value = 'changed text...0'
      newObj.name = 'Kelu'
      anotherText = 'change reactive'
      console.log(checkText.value[0], newObj, anotherText)
    }
    const checkText = computed(() => {
      return {0: sampleText.value}
    })
    return {
      newObj,
      sampleText,
      checkResult,
      anotherText,
      checkText,
      changeText
    }
  }
}
</script>
