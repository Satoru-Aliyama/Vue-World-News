<template>
  <div class="reference-text container">
    <div class="to-home">
      <router-link to="/">
        <div class="btn">←Back</div>
      </router-link>
    </div>
    <div class="reference-text__inner">
      <div class="reference-text__title">Reference</div>

      <div class="reference-text__text">
        <h3>A list of works cited is below.</h3>
        <div class="web-site">
          <h4>・Web site</h4>
          <p>This site is so cool!!</p>
          <p>
            © KADOKAWA ASCII Research Laboratories, Inc.
            <br />↓ ↓ ↓
            <br />
            <a
              href="https://www.webprofessional.jp/fetching-data-third-party-api-vue-axios/"
            >https://www.webprofessional.jp/fetching-data-third-party-api-vue-axios/</a>
          </p>
        </div>
        <div class="api">
          <h4>・API</h4>
          <p>You can use this API, then you can make a web app like this site soooon. You only need skill of Vue.js a little.</p>
          <p>
            Top Stories API
            <br />on The New York Times Developer Network
            <br />↓ ↓ ↓
            <br />
            <a href="https://developer.nytimes.com/">https://developer.nytimes.com/</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reference-text {
  margin-top: 120px;

  & h3 {
    font-size: 35px;
  }
  & h4 {
    font-size: 28px;
    margin: 40px 0 20px 0;
  }
  & p {
    font-size: 20px;
  }

  &__inner {
    max-width: 600px;
    margin: 0 auto;
    padding: 4%;
  }

  &__title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  & a {
    color: rgb(119, 119, 119);

    &:hover {
      color: rgb(78, 73, 116);
    }
  }
}

.btn a {
  color: #fff;
}

@media (min-width: 600px) {
  .reference-text {
    margin-top: 120px;

    &__title {
      text-align: center;
      font-size: 40px;
    }
  }
}

@media (min-width: 960px) {
  .reference-text {
    margin-top: 120px;

    &__title {
      text-align: center;
      font-size: 50px;
    }
  }
}
</style>