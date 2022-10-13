<template>
  <div class="hello">
    <h4> Personal Details</h4>
  
    <div class="input">
				<input type="text" v-model="val1" class="input-field" required/>
				<label class="input-label">Full name</label>
			</div>
						<div class="input">
				<input type="text" v-model="val2" class="input-field"  required/>
				<label class="input-label">Email</label>
			</div>
						<div class="input">
				<input type="password" v-model="val3" class="input-field" required/>
				<label class="input-label">Password</label>
        </div>
        <div class="input">
				<input type="text" v-model="val4" class="input-field" required/>
				<label class="input-label">Enter Your Gender</label> 
      </div>
        <div class="input">
				<input type="text" v-model="val5" class="input-field" required>
				<label class="input-label">Bio</label>
        </div>
			
    
    <!-- <button class="btn" @click="$router.push('/team');">Continue</button> -->
  
  <button class="btn" @click="$router.push('/team');">Continue</button>
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
      val3: '',
      val4: '',
      val5: ''
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
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');


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
.hello{
  background: $bgcolor;
  margin:0 auto;
  height: 600px;
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







</style>
