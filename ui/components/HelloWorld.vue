<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4> Personal Details</h4>
    <input type="text" name="temp" v-model="val1" placeholder="Name">
    <input type="text" name="temp1" v-model="val2" placeholder="Bio">
    <input type="radio" value="male" v-model="gender" >man
    <input type="radio" value="female" v-model="gender" >woman
    <h3>{{gender}}</h3>
    <button @click="$router.push('/team');">Continue</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  
  data() {
    return{
      val1:'',
      val2:'',
    gender: null
    }
},

// setup(){
  
//   function goToteam(){
//     this.$router.push('/team');
//   }
//   return {
//     goToteam,
//   }
 
// }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
