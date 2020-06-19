<template>
  <div class="top">
    <div @click="top" class="btn">Top</div>
  </div>
</template>

<script>
import { topScroll } from "@/topScroll";

export default {
  mixins: [topScroll],
};
</script>

<style lang="scss" scoped>
.top {
  text-align: center;
  margin: 30px;
}
</style>
