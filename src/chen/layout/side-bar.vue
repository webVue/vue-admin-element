<template>
  <div class="container">
    <el-menu
      background-color="#192a5e"
      text-color="rgb(196, 201, 210)"
      active-text-color="#3963bc"
      collapse-transition
      :collapse="collapse"
      router
      unique-opened
    >
      <el-submenu
        :index="item.id + ''"
        :key="item.id"
        v-for="item in side_list"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.name }}</span>
        </template>

        <!-- 二级 -->
        <el-menu-item
          v-for="items in item.children"
          :key="items.id"
          :index="items.path + ''"
        >
          <i class="el-icon-menu"></i>{{ items.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      side_list: [
        {
          path: "/book",
          name: "书籍管理",
          id: 1,
          children: [
            {
              path: "/book1",
              name: "新增书籍",
              id: 2,
            },
            {
              path: "/book2",
              name: "书籍列表",
              id: 3,
            },
          ],
        },
        {
          path: "/account",
          name: "账户管理",
          id: 10,
          children: [
            {
              path: "/account-create",
              name: "新增账号",
              id: 11,
            },
            {
              path: "/account-list",
              name: "账号列表",
              id: 12,
            },
          ],
        },
      ],
    };
  },
  computed:{
    ...mapState(['collapse'])
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .el-menu {
    height: 100%;
    border-right: none;
    font-size: 12px;
  }
}
</style>