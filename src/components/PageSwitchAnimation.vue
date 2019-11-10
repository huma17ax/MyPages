<template>
  <div
    class = "leftout"
    v-bind:class = "{full: isClose}"></div>
</template>

<script>
export default {
  name: 'animation',
  data: function () {
    return {
      isClose: false
    }
  },
  mounted () {
    this.$router.beforeEach(
      (to, from, next) => {
        this.isClose = true
        setTimeout(next, 500)
      }
    )
    this.$router.afterEach(
      (to, from, next) => {
        this.isClose = false
        // setTimeout(() => {this.isClose=false},500);
        // next();
      }
    )
  }
  /*
  watch: {
      'isOpen': function () {
          this.isOpen ? this.open() : this.close()
      }
  },
  methods: {
      open: function () {

      }
  } */
}
</script>

<style scoped>
  .leftout {
    z-index: 1000;
    position: fixed;
    top: 70px;/* 上位コンポーネントから*/
    left: 0px;
    width: 0%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  .full {
    width: 100%;
  }
</style>
