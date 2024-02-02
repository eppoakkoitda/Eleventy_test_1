<template>
  <article>
    <h1>This is a test</h1>
    <ul>
      <li v-for="(listItem, index) in listItems" :key="index">
        {{ listItem }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return {
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