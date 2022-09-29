<template>
    <div class="hello1">
      <h1>{{ msg }}</h1>
      <h4> Team Details</h4>
      <input type="text" name="temp" v-model="val3" placeholder="Name">
      <input type="text" name="temp1" v-model="val4" placeholder="Description">
      <input type="radio" value="male" v-model="gender" >Public
      <input type="radio" value="female" v-model="gender" >Private
      <h3>{{gender}}</h3>
      <button >Continue</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamComponent',
   
    
    data() {
      return{
        val3:'',
        val4:'',
      gender: null
      }
  },
  setup(){

}
}

  
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  