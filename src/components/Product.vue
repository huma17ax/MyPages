<template>
    <div class = "whole">
        <div class= "list-container">
            <div
            class="list-item"
            v-for="item in listItems"
            v-bind:key="item.id">{{item.title}}</div>
        </div>
        <div class="explanation">
            <h3>title</h3>
            <img alt="vue logo" src="../assets/logo.png">
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
        {title: 'DragonSlayer'},
        {title: 'FortuneTelling'},
        {title: 'TETROCK'}
      ]
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
}

.explanation {
    width: 500px;
}
</style>
