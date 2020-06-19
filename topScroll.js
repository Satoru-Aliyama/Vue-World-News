import $ from "jquery";

export const topScroll = {
  methods: {
    top() {
      $("html, body").animate({ scrollTop: 0 }, 600);
    },
  },
};
