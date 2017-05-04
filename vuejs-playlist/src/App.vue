<template>
  <div>
    <h1>{{title}}</h1>
    <skr></skr>
  </div>
</template>

<script>
import Seker from "./Seker.vue"

export default {
  //Diğer tarafta hazırladığımız componenti burada import ettikten sonra component içine gömüyoruz.
  //{"skr":Seker} yerine {Seker} de yazabilirsin.
  components:{
    "skr":Seker
  },
  data () {
    return {
      title:"Tatli Şekerler"
    }
  }
}
</script>

<style scoped>
h1{
  color:purple;
}
</style>
