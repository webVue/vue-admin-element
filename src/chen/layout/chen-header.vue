<template>
  <div class="container">
    <div class="nav-bar">
      <!-- 展示/收缩 start -->
      <i
        class="el-icon-s-fold iconfont"
        :class="{ rotate: collapse }"
        @click="_setCollapse"
      ></i>
      <!-- 展示/收缩 end -->

      <div class="">
        <bread-crumd />
      </div>
    </div>

    <!-- 历史页 start -->
    <div></div>
    <!-- 历史页 end -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SET_COLLAPSE } from "store/actionTypes";
// import backTop from "./back-top";
import BreadCrumd from "./bread-crumd";

export default {
  name: "appheader",
  components: {
    BreadCrumd,
    // backTop,
  },
  computed: {
    ...mapState(["collapse"]),
  },
  methods: {
    ...mapMutations([SET_COLLAPSE]),
    _setCollapse() {
      this[SET_COLLAPSE](!this.collapse);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #eef4f9;
  height: 60px;
  line-height: 60px;
  padding: 0px 20px;
  color: #3963bc;
  .nav-bar {
    width: 100%;
    height: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 10px;
  }
  .iconfont {
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    &.rotate {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
    }
  }
}
</style>