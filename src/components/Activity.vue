<template>
    <div class="whole">
      <div>
        <h1 class="stick">ゲーム制作</h1>
        <div class="content">サンプルコンテンツ</div>
      </div>
      <div>
        <h1 class="stick">競技プログラミング</h1>
        <div class="content">サンプルコンテンツ</div>
      </div>
      <div>
        <h1 class="stick">聴覚障害支援</h1>
        <div class="content">サンプルコンテンツ</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'activity'
}
</script>

<style scoped>
.whole {
    max-width: 750px;
    margin: auto;
}

.stick {
  position: sticky;
  top: 70px;
}

.content {
}
</style>
