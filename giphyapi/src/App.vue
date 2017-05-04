<template>
  <div id="app">
    <p v-if="isloading">Loading...</p>
    <search v-on:searchrequest="handlesearch"></search>
    <preview :gifs="gifs"></preview>
  </div>
</template>

<script>
import Search from "./Search.vue"
import Preview from "./Preview.vue"
export default {
  name: 'app',
  components:{Search,Preview},
  data(){
    return{
      isloading:true,
      gifs:[]
    }
  },
  methods: {
    doquery(url){
      fetch(url)
        .then((res)=>{return res.json()})
        .then((res)=>{
          this.gifs = res.data
          this.isloading = false
        ;})
      },
    handlesearch(query){
      this.gifs = [];
      this.isloading = true;
      const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`;
      this.doquery(url);
    }
  },
  created(){
     const url ="http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
     this.doquery(url);
  }
}
</script>

<style>
body,html{
  background-color:#ecf0f1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
