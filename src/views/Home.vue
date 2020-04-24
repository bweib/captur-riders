<template>
  <div v-if="videoShow.isShow" id="container">
    <video id="background_video" muted autoplay src="../../public/videos/1.mp4"></video>
    <div id="video_cover"></div>
    <div id="overlay"></div>
    <div id="video_controls">
      <span id="play">
        <!-- <img src="play.png"> -->
      </span>
      <span id="pause">
        <!-- <img src="pause.png"> -->
      </span>
    </div>
    <section id="main_content">
      <div id="head">
        <h1>HTML5轻松实现全屏视频背景-Bideo.js</h1>
        <p class="sub_head">一个可以轻松添加页面全屏背景视频的Javscript库</p>
        <p class="info">(稍等片刻，视频加载需要一点点时间.)</p>
      </div>
    </section>
  </div>
  <div v-else>主页</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { onMounted, reactive, computed } from "vue";
export default {
  name: "Home",
  setup() {
    const videoShow = reactive({
      isShow: true
    });
    const changetitle = () => {
      console.log("666");
    };
    const videoEnd = () => {
      console.log("放完了");
    };
    const doubleCount = computed(() => {});
    //生命周期方法
    onMounted(() => {
      console.log(videoShow, "init mounted...");
      changetitle();
      const md = document.getElementById("background_video");
      md.onended = function() {
        videoShow.isShow = false;
        console.log(videoShow, "播放结束");
      };
    });
    return { videoShow, doubleCount, changetitle, videoEnd };
  },
  components: {
    // HelloWorld
  }
};
</script>
<style lang="less" scoped>
#container {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
}

#background_video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  height: 100%;
  width: 100%;
}

#video_cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

#overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>

