new Vue({
  el: "#vue-app",

  data: {
    html: true,
    css: false,
    js: false,
    active: "",
  },

  methods: {
    toggleHtml() {
      {
        this.html = true;
        this.css = false;
        this.js = false;
        this.active = "active-html";
      }
    },
    toggleCss() {
      this.html = false;
      this.css = true;
      this.js = false;
      this.active = "active-css";
    },
    toggleJs() {
      this.html = false;
      this.css = false;
      this.js = true;
      this.active = "active-js";
    },
  },

  computed: {},
});
