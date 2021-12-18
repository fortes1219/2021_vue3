<template>
  <div class="page">

  </div>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    // v-models
    const store = useStore()
    const countriesModule = store.state.countriesModule

    const callApi = onMounted( async () => {
      await store.dispatch("countriesModule/get_api")
      console.log('####Call API: ', store.state)
    })
    return {
      callApi
    }
  }
}
</script>