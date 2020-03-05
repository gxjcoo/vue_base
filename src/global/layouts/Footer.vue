<template>
  <footer>
    <div class="container">
      <span class="footer-flot fir-desc-footer">
        <a href="http://www.beian.miit.gov.cn/" target="_blank">浙ICP备20004092号-1</a>
      </span>
      <!-- <span class="footer-flot fir-footer-flot">｜</span>
      <span class="footer-flot sec-desc-footer">
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44081102000040"
          target="_blank"
        >粤公网安备44081102000040号</a>
      </span>
      <span class="footer-flot sec-footer-flot">｜</span>
      <p class="link-git">
        <span class="name">
          Copyright © 2020&nbsp;
          <a target="_blank" href="https://cqqqy.com">cqqqy.com</a>&nbsp;
        </span>
        <span class="github">
          <a target="_blank" href="https://github.com/gcjcoo">
            <Icon type="logo-github"/>
          </a>
        </span>
      </p> -->
      <BackTop :height="600" :bottom="60"></BackTop>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang='less' scoped>
footer {
  position:fixed;
  bottom: 1%;
  width:100%;
  margin-top: 16px;
  height: 30px;
  // background: rgba(255, 255, 255, 0.5);

  .container {
    width: 1080px;
    max-width: 100%;
    margin: 0 auto;
    height: 100%;
    text-align: center;
    font-size: 14px;
    position: relative;
    line-height: 26px;

    .footer-flot {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
    }
    .link-git {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;

      .github {
        i {
          font-size: 18px;
          margin-top: -5px;
        }
      }
    }
  }
}
</style>
