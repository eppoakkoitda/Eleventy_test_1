<template>
  <div>コンポーネントAから呼び出される子コンポーネント</div>
  <div>{{ value }}</div>
  <div>
    <ul>
      <li v-for="(listItem, index) in listItems" :key="index">
        {{ listItem }}
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      listItems: [
        "親コンポ―ネントから受け取った値を",
        "表示する",
        "子コンポーネント",
      ],
    }
  },
};
</script>