<template>
    <div
    class="button-item"
    v-on:mouseover="mouseOver"
    v-on:mouseout="mouseOut"
    v-bind:style="styles">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'mybutton',
  data: function () {
    return {
      baseColor: '#FF9999',
      gradColor: '#FF4040'
    }
  },
  methods: {
    mouseOver: function () {
    },
    mouseOut: function () {
    }
  },
  computed: {
    styles () {
      return {
        '--base-color': this.baseColor,
        '--grad-color': this.gradColor
      }
    }
  }
}
</script>

<style scoped>
.button-item {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    line-height: 50px;

    --base-color: white;
    --grad-color: white;

    background-color: var(--base-color);
}

.button-item:hover {
    background: linear-gradient(to right,var(--base-color),var(--base-color) 30%, var(--grad-color) 50%, var(--base-color) 70%, var(--base-color));
    background-size: 500% 100%;
    animation-name: animation-hover;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
}

@keyframes animation-hover {
    0% {background-position: 100% 0%}
    100% {background-position: 0% 0%}
}

</style>
