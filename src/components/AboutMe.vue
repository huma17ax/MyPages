<template>
    <div class="whole">
        <h2>経歴</h2>
        <table>
            <tr v-for="data in careerData" v-bind:key="data.id">
                <th>{{data.period}}</th>
                <td v-html="data.content"></td>
            </tr>
        </table>
        <h2>現在</h2>
        <h2>趣味・興味</h2>
    </div>
</template>

<script>
import careerData from '@/assets/aboutme.json'

export default {
  name: 'aboutme',
  data: function () {
    return {
      careerData: careerData
    }
  }
}
</script>

<style scoped>
.whole {
    width: 750px;
    margin: auto;
}

table {
    width: 100%;
    border: 0px;
    border-collapse: collapse;
    border-spacing: 0;
}

tr {
    height: 40px;
    border-bottom: solid 2px #FFFFFF;
}

th {
    padding-left: 20px;
    text-align: left;
    background-color: #FF9090;
    width: 150px;
    position: relative;
}

th::after {
  display: block;
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  top:calc(50% - 10px);
  right:-10px;
  border-left: 10px solid #FF9090;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

td {
    background-color: #BBBBBB;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
}
</style>
