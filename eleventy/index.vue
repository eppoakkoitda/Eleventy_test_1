<template>
  <room-with-a/>
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
import roomWithA from "./component/room-with-a.vue";
export default {
  components: {
    roomWithA
  },
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