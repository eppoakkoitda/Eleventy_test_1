<template>
  <article>
    <h1>This is a test</h1>
    <div v-html="htmlContent"></div>
    <ul>
      <li v-for="(listItem, index) in listItems" :key="index">
        {{ listItem }}
      </li>
    </ul>
  </article>
  
</template>

<script>
export default {
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
</script>