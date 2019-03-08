<template>
  <div>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <template v-slot:header>
      <h1>Footer © {{currentYear}}</h1>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
