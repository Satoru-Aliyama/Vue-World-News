<template>
  <div class="news-list">
    <div class="card" v-for="(post, index) in posts" :key="index">
      <div class="card-content">
        <div class="card__title" v-if="post.title">{{ post.title }}</div>
        <div class="card__pic">
          <a :href="post.url" target="_blank"><img :src="post.image_url"/></a>
        </div>
        <div class="card__text">
          <p>{{ post.abstract }}...</p>
        </div>
        <div class="btn">
          <a :href="post.short_url">read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props: ["posts"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.301);
  margin: 10px;
  &-content {
    position: relative;
    padding: 0;
  }

  &__title {
    background: #535353;
    color: #fff;
    padding: 20px 10px;
  }

  &__pic {
    margin-bottom: 10px;
    overflow: hidden;
    height: 200px;

    & img {
      transition: all 0.5s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &__text {
    padding: 20px;
  }

  & .btn {
    margin: 10px;

    & a {
      color: #fff;
    }
  }
}

@media (min-width: 600px) {
  .news-list {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 6%;
    margin-bottom: 50px;
  }
}

@media (min-width: 960px) {
  .news-list {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 6%;
    margin-bottom: 50px;
  }
}
</style>
