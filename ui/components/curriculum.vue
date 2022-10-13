<template>
    <div class="hello2">
      <h4> Add a curriculum</h4>
      <div class="input">
				<input type="text" v-model="val8" class="input-field" required/>
				<label class="input-label">Subject Name</label>
			</div>
						<div class="input">
				<input type="text" v-model="val9" class="input-field"  required/>
				<label class="input-label">References</label>
			</div>
						<div class="input">
				<input type="password" v-model="val10" class="input-field" required/>
				<label class="input-label">Description</label>
        </div>
        <button class="btn" @click="$router.push('/team');">Edit Team</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CurriculumComponent',
   
    
    data() {
      return{
        val8:'',
        val9:'',
        val10:'',
      }
  },
  setup(){

}
}

  
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>

$bgcolor: linear-gradient(rgb(19, 167, 167), rgb(49, 147, 188));

.hello2{
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
    margin-right:300px;
}




  </style>
  