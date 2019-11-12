<template>
    <div class="whole">
        <div
        v-for="data in contactData"
        v-bind:key = "data.id">
            <a target="_blank"
            v-bind:href="data.url">{{data.title}}</a>
        </div>
    </div>
</template>

<script>
import contactData from '@/assets/contact.json'

export default {
  name: 'contact',
  data: function () {
    return {
      contactData: contactData
    }
  }
}
</script>

<style scoped>
.whole {
    max-width: 750px;
    margin: auto;
}
</style>
