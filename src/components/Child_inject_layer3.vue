<template>
  <div class="row vertical" data-inset="1rem">
    <div>{{ 'layer 3: ' + text }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChildInjectLayer3',
  props: {
    text: String
  },
  setup() {
    return {

    }
  }
}
</script>