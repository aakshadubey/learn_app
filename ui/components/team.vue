<template>
    <div class="hello1">
      <h4> Team Details</h4>
      <div class="input">
				<input type="text" v-model="val6" class="input-field" required/>
				<label class="input-label">Team Name</label>
			</div>
						<div class="input">
				<input type="text" v-model="val7" class="input-field"  required/>
				<label class="input-label">Description</label>
			</div>
      <div class="radio">
      <input type="radio" value="public" v-model="option" >Public
      <input type="radio" value="private" v-model="option" >Private
      <!-- <h3>{{option}}</h3> -->
    </div>
      <button class="btn1"  >Skip and go solo</button>
      <button class="btn" @click="$router.push('/curriculum');">Continue</button>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamComponent',
   
    
    data() {
      return{
        val6:'',
        val7:'',
      option: null
      }
  },
  setup(){

}
}

  
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  
  $bgcolor: linear-gradient(rgb(19, 167, 167), rgb(49, 147, 188));
  @mixin button( $width:200px, $padding:10px 20px, $font-size:16px, $border-radius:6px, $bg-color:rgb(222, 225, 228), $font-color:#333,  $margin-top:80px, $border:none ) {
	padding:$padding;
  border:$border;
  width:$width;
  margin-top:$margin-top;
	display:inline-block;
	border-radius:$border-radius;
	background:$bg-color;
	font-size:$font-size;
	color:$font-color;
}
.btn {
	@include button;
}
.btn1{
  @include button;
  margin-right:30px;
}
.hello1{
  background: $bgcolor;
  margin:0 auto;
  height: 450px;
  width: 600px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.input {
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	padding-top: 1.5rem;
	&+.input {
		margin-top: 1.5rem;
	}
}

.input-label {
	color: #000000;
	position: absolute;
	top: 1.5rem;
	transition: .25s ease;
}

.input-field {
	border: 0;
	z-index: 1;
	background-color: transparent;
	border-bottom: 2px solid #eee; 
	font: inherit;
  width: 350px;
	font-size: 1.125rem;
	padding: .25rem 0;
	&:focus, &:valid {
		outline: 0;
		border-bottom-color: #cfb92d;
		&+.input-label {
			color:  #cfb92d;
			transform: translateY(-1.5rem);
		}
	}
}
.radio{
  margin-top:50px;
  margin-right:460px;
}


  </style>
  