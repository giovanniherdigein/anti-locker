<template>
  <div class="flex p-2">
    <HeaderView />
  </div>
</template>

<script>
import HeaderView from './home/HeaderView.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderView,
  },
  data() {
    return {}
  },
  props: {},
  methods: {},
}
</script>

<style scoped></style>
