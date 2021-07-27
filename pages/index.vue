<template>
  <div class="bg">
  
    <v-row class="justify-center">
      <v-img
        src="/mkep1.jpeg"
        contain
        height="400"
        width="400"
        class="position "
      >
      </v-img>
    </v-row>
  </div>
</template>

<script>


export default {
  
}
</script>

<style scoped>
.bg {
  background: #13274a;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.position {
  width: 40%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.bounce-1 {
  animation-name: bounce-1;
  animation-timing-function: linear;
}
@keyframes bounce-1 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
