<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__title">
        <p @click="top">Vue World News</p>
      </div>
      <div class="header__time">{{ now }}</div>
    </div>
  </div>
</template>

<script>
import { topScroll } from "@/topScroll";

export default {
  mixins: [topScroll],
  data() {
    return {
      show: false
    };
  },
  computed: {
    now() {
      const now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let time = `${year}/${month}/${day}`;
      return time;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: rgba(20, 55, 83, 0.712);
  color: #fff;
  padding: 20px 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &__title {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }

  &__inner {
    max-width: 1020px;
    padding: 0 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
