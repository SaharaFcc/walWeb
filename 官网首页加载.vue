<template>
  <div class="blog">
    <div class="loadingbox">
      <div class="loader-circle"></div>
      <div class="loader-line-mask">
        <div class="loader-line"></div>
      </div>
      <img src="@/assets/images/common/loading_logo.png" alt="" />
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="1"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="50"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>