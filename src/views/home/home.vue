<template>
  <div>
    <h1>我是一级路由 home 那我就可以做 layout布局  这样 右侧主体内容就可以保住 router-view</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>