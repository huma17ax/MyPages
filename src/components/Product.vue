<template>
    <div class = "whole">
        <div class= "list-container">
            <div
            class="list-item"
            v-for="(item,index) in listItems"
            v-bind:key="item.id"
            v-on:click="changeProduct(index)">{{item.title}}</div>
        </div>
        <div class="explanation">
            <h3 >{{nowTitle}}</h3>
            <img alt="vue logo" v-bind:src="nowImageSource">
            <p>explanation</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product',
  data: function () {
    return {
      listItems: [
        {title: 'DragonSlayer', source: require('@/assets/logo.png')},
        {title: 'FortuneTelling', source: require('@/assets/logo.png')},
        {title: 'TETROCK', source: require('@/assets/logo.png')}
      ],
      selecting: 0
    }
  },
  methods: {
    changeProduct: function (title) {
      this.selecting = title
    }
  },
  computed: {
    nowTitle: function () {
      return this.listItems[this.selecting].title
    },
    nowImageSource: function () {
      return this.listItems[this.selecting].source
    }
  }
}
</script>

<style scoped>
.whole {
    display: flex;
    width: 750px;
    margin: auto;
}

.list-container {
    width: 250px;
}

.list-item{
    height: 50px;
    line-height: 50px;
    cursor: pointer;
}

.explanation {
    width: 500px;
}
</style>
