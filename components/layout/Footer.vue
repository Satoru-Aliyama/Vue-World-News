<template>
  <div class="footer">
    <div class="footer__inner">
      <a href="https://satoruakiyama.com">&copy;Satoru Akiyama</a>
      <a href="https://github.com/Satoru-Aliyama/Vue-World-News">Github</a>
      <router-link to="/reference">Reference</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: rgba(20, 55, 83, 0.712);
  padding: 20px 0;
  width: 100%;

  &__inner {
    max-width: 1020px;
    padding: 0 10px;
    margin: 0 auto;
    text-align: right;

    & a {
      color: #fff;
      padding-left: 20px;
      &:hover {
        color: rgb(219, 207, 243);
      }
    }
  }
}
</style>
