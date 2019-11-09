<template>
    <div>
        <h1>Welcome to MyPage</h1>
        <div class="button-container">
            <span class="button-item"
            v-on:click="goPage('/AboutMe')">About me</span>
            <span class="button-item"
            v-on:click="goPage('/Activity')">Activity</span>
            <span class="button-item"
            v-on:click="goPage('/Product')">Product</span>
            <span class="button-item"
            v-on:click="goPage('/Contact')">Contact</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'toppage',
  methods: {
    goPage: function (path) {
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>

<style scoped>
h1 {
    padding-top: 120px;
    font-size: 60px;
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    margin: auto;
}

.button-item {
    width: 200px;
    height: 50px;
    margin: 25px;
    background: rgba(255, 0, 0, 0.5);
    border-radius: 10px;
    cursor: pointer;
}
</style>
