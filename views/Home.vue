<template>
  <div class="home">
    <div class="home__title">
      <p>Today's Top News</p>
    </div>
    <News />
    <topBtn />
  </div>
</template>

<script>
// @ is an alias to /src
import News from "@/components/news/News.vue";
import topBtn from "@/components/layout/topBtn";

export default {
  name: "Home",
  components: {
    News,
    topBtn
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 90px;

  &__title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
}

@media (min-width: 600px) {
  .home {
    margin-top: 120px;

    &__title {
      text-align: center;
      font-size: 40px;
    }
  }
}

@media (min-width: 960px) {
  .home {
    margin-top: 120px;

    &__title {
      text-align: center;
      font-size: 50px;
    }
  }
}
</style>
