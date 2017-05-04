<template>
  <div>
    <h1>Sayı arttırıcı</h1>
    <h1>Sepette toplam {{totalcount}} adet ürün var</h1>
    <ul>

      <div class="iki">
        <li>
        <div class="bir">{{count + " adet " + item}}</div>
        <button v-on:click="add">+</button>
        <button v-on:click="sub">-</button>
        </li>
      </div>

    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ["ekmek","peynir","zeytin"],
      count:0,
      totalcount:0
    }
  },
  methods:{
    add(){
      this.count++
    },
    sub(){
      this.count--
    }
  }
}
</script>

<style scoped>
.bir{
  float:left;
  width:150px;
}
.iki{
  width:20%;
}
</style>
