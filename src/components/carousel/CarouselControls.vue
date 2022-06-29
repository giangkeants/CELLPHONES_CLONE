<template>
  <div>
  <button class="carousel-control left" @click="$emit('prev')"><i class="fas fa-angle-left"></i></button>
  <button class="carousel-control right" @click="$emit('next')"><i class="fas fa-angle-right"></i></button>
  </div>
</template>

<script>
export default {
  emits: ["prev", "next"],
};
</script>
<style scoped>
.carousel-control {
  display: inline;
  border: none;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.1;

}
.carousel-control:hover{
  opacity: 1;
}
.left {
  left: 1%;
}
.right {
  right: 1%;
}
</style>
