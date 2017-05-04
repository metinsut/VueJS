<template>
  <div class="search">
    <input type="text" v-model="query" @keypress.enter="ara">
    <button @click="ara">Search</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query:""
    }
  },
  methods:{
    ara(){
      this.$emit("searchrequest",this.query);
    }
  }
}
</script>

<style>
.search input{
  padding:10px 20px;
  border:1px solid #7f8c8d;
  border-radius:5px;
  width:400px;
}
.search button{
  padding: 7px 15px;
  border: 1px solid #2980b9;
  background-color: #2980b9;
  color:white;
  font-size:16px;
  border-radius:5px;
}



</style>
