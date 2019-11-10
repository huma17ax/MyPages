<template>
    <div class = "whole">
        <div class= "list-container">
            <myButton
            class="list-item"
            v-for="(item,index) in listItems"
            v-bind:key="item.id"
            v-on:click.native="changeDetail(index)">{{item.title}}</myButton>
        </div>
        <div class="explanation">
            <h3>{{nowTitle}}</h3>
            <div class = "images">
              <img alt="screen shot"
              class = "main-image"
              v-bind:class = "{'main-image-close': isClosing}"
              v-bind:src="nowImageSource"
              v-on:load="loaded">
              <!--
              <img alt="sub image"
              class = "sub-image"
              v-bind:class = "{'sub-image-open' : changing}"
              v-bind:src="nextImageSource">
              -->
            </div>
            <div
            class="exp-text"
            v-bind:class = "{'exp-text-close': isClosing}"
            v-html="productData[selecting].explanation">
            </div>
        </div>
    </div>
</template>

<script>
import myButton from '@/components/Button'
import productData from '@/assets/exp.json'

export default {
  name: 'product',
  components: {
    myButton
  },
  data: function () {
    return {
      listItems: [
        {title: 'DragonSlayer', imgSrc: require('@/assets/logocopy.png')},
        {title: 'FortuneTelling', imgSrc: require('@/assets/dragon1.png')},
        {title: 'TETROCK', imgSrc: require('@/assets/dragon2.png')}
      ],
      selecting: 0,
      isOpening: false,
      isClosing: false,
      productData: productData
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
    },
    loaded: function () {
      // 画面戻し
      setTimeout(() => {
        this.isClosing = false
      }, 100)
    }
  },
  computed: {
    nowTitle: function () {
      return this.listItems[this.selecting].title
    },
    nowImageSource: function () {
      return this.listItems[this.selecting].imgSrc
    },
    nextImageSource: function () {
      return ''
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
    padding-top: 50px;
}

.list-item{
    margin-top: 20px;
    margin-bottom: 20px;
}

.explanation {
    position: absolute;
    top: 0px;
    left: 250px;
    width: 500px;
}

.images {
    display: flex;
    z-index: -1;
}

.main-image {
    margin: 0 auto;
    top: 0px;
    left: 0px;
    max-width: 500px;
    max-height: 300px;
    /*transform: rotateY(0deg);*/
    transition: 0.5s;
}

.main-image-close {
    /*transform: rotateY(90deg);*/
    max-width: 50px;
    transition: 0.5s;
    opacity: 0;
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
.exp-text {
    margin-top: 20px;
    text-align: left;
}

.exp-text-close {
    opacity: 0;
    transition: 0.5s;
}
</style>
