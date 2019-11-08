<template>
  <div class="header">
    <span class="title range">title</span>
    <span class="Am range">About me</span>
    <span class="Ac range">Activity</span>
    <span class="Pd range">Product</span>
    <span class="Ct range">Contact</span>
  </div>
</template>

<script>
export default {
  name: 'header',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background: rgba(255, 0, 0, 0.5);
}

.title {
  display: flex;
}

.range {
  background: rgba(0, 255, 0, 0.3);
}
</style>
