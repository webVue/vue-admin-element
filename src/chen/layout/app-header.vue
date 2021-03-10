<template>
  <div class="container" @click="_setCollapse">{{ collapse }}我是页头</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SET_COLLAPSE } from "store/actionTypes";

export default {
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
}
</style>