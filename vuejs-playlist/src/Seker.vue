<template>
  <div>
    <ul>
      <li v-for="seker in sekerler">{{seker}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sekerler:["metin","fırat","pınar","didem","defne"]
    }
  }
}
</script>

<style scoped>
  li{
    color:green;
  }
</style>
