<template>
  <div class="container">
    <el-container style="height: 100%">
      <!-- 左侧 -->
      <el-aside :class="{ 'w-64': collapse }">
        <side-bar />
      </el-aside>
      <!-- 页头 and 主体内容 -->
      <el-container>
        <!-- 页头 start -->
        <el-header>
          <chen-header></chen-header>
        </el-header>
        <!-- 页头 end -->

        <!-- 主体内容 start -->
        <el-main>
          <app-main />
        </el-main>
        <!-- 主体内容 end -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
//  ChenHeader,
import { AppMain, SideBar, ChenHeader } from "chen/layout";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    AppMain,
    SideBar,
    ChenHeader,
  },
  computed: {
    ...mapState(["collapse"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .el-aside {
    width: 200px !important;
    &.w-64 {
      width: 64px !important;
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
    }
  }
  .el-header {
    padding: 0;
  }
  .el-header {
    padding: 0;
    background: #eef4f9;
    height: 86px !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-shadow: 0 2px 6px 0 rgb(190 204 216 / 40%);
    box-shadow: 0 2px 6px 0 rgb(190 204 216 / 40%);
    border-bottom: 1px solid rgba(190, 204, 216, 0.4);
  }
}
</style>