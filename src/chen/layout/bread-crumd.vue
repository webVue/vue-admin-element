<template>
  <div class="breadcrumd">
    <a
      class="item"
      v-for="(item, index) in titleArr"
      style="cursor: default"
      :key="index"
    >
      <p>{{ item }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "breadcrumd",
  data() {
    return {
      titleArr: ["活动管理", "活动列表"],
    };
  },
};
</script>

<style lang="scss" scoped>
.breadcrumd {
  display: flex;
  align-items: center;
  font-size: 14px;
  .item {
    display: flex;
    align-items: center;
    padding-right: 18px;
    position: relative;
    color: #666;
    &:after {
      content: "/";
      position: absolute;
      top: 0;
      right: 6px;
    }
  }
  .item:last-child {
    color: #666;
    padding-right: 0;

    &:after {
      content: "";
    }
  }
}
</style>