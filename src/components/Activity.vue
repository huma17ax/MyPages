<template>
    <div class="whole">
      <div>
        <h1 class="stick">ゲーム制作</h1>
        <div class="content">
            趣味でゲーム制作をしています．
            使用言語はC++，Unity(C#)，Javaなど．<br>
            PCでのスタンドアロンアプリケーションが主．<br>
            大学内のサークル「千葉大学電子計算機研究会」として，
            大学祭での展示やコミックマーケットでの頒布を行っています．<br>
            サークルへのアクセスは
            <a href="https://densanken.com/" target="_blank">https://densanken.com/</a>へ．
        </div>
      </div>
      <div>
        <h1 class="stick">競技プログラミング</h1>
        <div class="content">
            競技プログラミングコンテストに定期的に参加しています．<br>
            競技プログラミングとは，プログラマが主にアルゴリズム力と数学力を競う競技です．<br>
            日本語で提供されるAtCoderや，海外のCodeforcesなど多くのコンテストがあり，その形式も様々．<br>
            現在の成績は，AtCoderで水色/Codeforcesで水色です．<br>
            AtCoderのプロフィールページは
            <a href="https://atcoder.jp/users/huma17" target="_blank">https://atcoder.jp/users/huma17</a>です．
        </div>
      </div>
      <div>
        <h1 class="stick">聴覚障害支援</h1>
        <div class="content">
            大学の学生支援団体の1つ，「千葉大学ノートテイク会」に所属し活動しています．<br>
            メインの活動はPCによるノートテイクです．<br>
            PCによるノートテイクでは，支援学生(テイカー)が障害学生(利用者)の講義に同行し，
            その場で先生の声・環境音等をPCで文字に起こし，利用者に共有することで支援を行います．<br>
            情報保障の精度を上げるための練習会の開催や，
            複数の大学から聴覚障害支援団体が集まるシンポジウムへの参加などもしています．<br>
            詳しい情報・関連情報は会のwebページ
            <a href="http://ntkai.skr.jp/" target="_blank">http://ntkai.skr.jp/</a>へ．
        </div>
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
    overflow-y: scroll;
    height: 100%;
}

/*webkitのみ*/
.whole::-webkit-scrollbar {
    width: 10px;
}
.whole::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(255, 0, 0, .2);
}
.whole::-webkit-scrollbar-thumb {
    background-color: rgba(255, 150, 150, .5);
    border-radius: 10px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2);
}

.stick {
}

.content {
    padding-left: 20px;
    width: 95%;
}
</style>
