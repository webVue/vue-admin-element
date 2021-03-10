<template>
  <div class="container">
    <el-container style="height: 100%">
      <!-- 左侧 -->
      <el-aside width="200px">
        <side-bar />
      </el-aside>
      <!-- 页头 and 主体内容 -->
      <el-container>
        <!-- 页头 start -->
        <el-header>
          <app-header />
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
import { AppMain, SideBar, AppHeader } from "chen/layout";

export default {
  name: "home",

  components: {
    AppMain,
    SideBar,
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .el-header {
    padding: 0;
  }
}
</style>