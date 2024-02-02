'use strict';

var script = {
  mounted: function () {
    this.loadHtml();
  },
  methods: {
    loadHtml() {
      fetch("./html/sample.html").then((res) => {
        res.text().then((html) => {
          this.htmlContent = html;
        });
      });
    },
  },
  data() {
    return {
      htmlcontent: "",
      title: "Wow I'm So Excited To Use Vue In My Templates!",
      listItems: [
        "This is the first item",
        "This is the second",
        "This is perhaps the third, though who could truly say.",
      ],
    };
  },
};

module.exports = script;
