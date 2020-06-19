<template>
  <div class="main">
    <div class="container">
      <div class="main__inner">
        <Category :sections="sections" @retrieve="retrieve" />
        <NewsList :posts="processedPosts" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NewsList from "@/components/news/NewsList";
import Category from "@/components/category/Category";

export default {
  name: "News",
  components: {
    NewsList,
    Category,
  },
  data() {
    return {
      results: [],
      NYTBaseUrl: "https://api.nytimes.com/svc/topstories/v2/",
      ApiKey: "4ubvrLEg48qGB2rcBP3TnkG0avDeRAkD",
      sections: [
        "home",
        "arts",
        "automobiles",
        "books",
        "business",
        "fashion",
        "food",
        "health",
        "insider",
        "magazine",
        "movies",
        "national",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sports",
        "sundayreview",
        "technology",
        "theater",
        "tmagazine",
        "travel",
        "upshot",
        "world",
      ],
      section: "home",
    };
  },
  computed: {
    processedPosts() {
      let posts = this.results;

      posts.map((post) => {
        let imgObj = post.multimedia.find(
          (media) => media.format === "superJumbo"
        );
        post.image_url = imgObj
          ? imgObj.url
          : "http://placehold.it/300x200?text=N/A";
      });
      return posts;
    },
  },
  created() {
    this.getPosts(this.section);
  },
  methods: {
    buildUrl(url) {
      let buildUrl = this.NYTBaseUrl + url + ".json?api-key=" + this.ApiKey;
      return buildUrl;
    },
    getPosts(section) {
      let url = this.buildUrl(section);
      axios
        .get(url)
        .then((res) => (this.results = res.data.results))
        .catch((e) => console.log(e));
    },
    retrieve(value) {
      console.log("retri");
      this.section = value;
      this.getPosts(this.section);
    },
  },
};
</script>
