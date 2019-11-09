<template>
    <div class = "whole">
        <div class= "list-container">
            <div
            class="list-item"
            v-for="(item,index) in listItems"
            v-bind:key="item.id"
            v-on:click="changeDetail(index)">{{item.title}}</div>
        </div>
        <div class="explanation">
            <h3 >{{nowTitle}}</h3>
            <div class = "images">
              <img alt="screen shot"
              class = "main-image"
              v-bind:class = "{'main-image-close': isClosing}"
              v-bind:src="nowImageSource">
              <!--
              <img alt="sub image"
              class = "sub-image"
              v-bind:class = "{'sub-image-open' : changing}"
              v-bind:src="nextImageSource">
              -->
              </div>
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
        {title: 'FortuneTelling', source: require('@/assets/dragon1.png')},
        {title: 'TETROCK', source: require('@/assets/dragon2.png')}
      ],
      selecting: 0,
      isOpening: false,
      isClosing: false
    }
  },
  methods: {
    changeDetail: function (title) {
      if (this.selecting === title) return
      // 画面回転
      this.isClosing = true
      // this.selecting = this.nextSelect
      setTimeout(() => {
        this.selecting = title
      }, 500)
      // 画面戻し
      setTimeout(() => {
        this.isClosing = false
      }, 550)
    }
  },
  computed: {
    nowTitle: function () {
      return this.listItems[this.selecting].title
    },
    nowImageSource: function () {
      return this.listItems[this.selecting].source
    },
    nextImageSource: function () {
      return this.listItems[this.nextSelect].source
    }
  }
}
</script>

<style scoped>
.whole {
    display: flex;
    width: 750px;
    margin: auto;
    position: relative;
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
    position: absolute;
    top: 0px;
    left: 250px;
    width: 500px;
}

.images {
    display: flex;
    position: relative;
    z-index: -1;
}

.main-image {
    /*position: absolute;*/
    margin: 0 auto;
    top: 0px;
    left: 0px;
    max-width: 500px;
    height: 281px;
    /*transform: rotateY(0deg);*/
    transition: 0.5s;
}

.main-image-close {
    /*transform: rotateY(90deg);*/
    max-width: 0px;
    transition: 0.5s;
}

.main-image-open {
    /*transition: rotateY(180deg);*/
    width: 0px;
    transition: 0.5s;
}
/*
.sub-image {
    position: absolute;
    top: 0px;
    left: 500px;
    width: 0px;
    transform: rotateY(90deg);
    transition: 0s;
}

.sub-image-open {
    top: 0px;
    left: 0px;
    width: 500px;
    transform: rotateY(0deg);
    transition: 1s
}
*/
</style>
