<script setup>
import test from './compo_a_child.vue'
</script>

<template>
  <div>コンポーネントA</div>
  <input type='text' v-model='message'>
  <test :value=message />
</template>

<script>
export default {
  data(){
    return {
        message: 'Hello VueJS!'
    }
  },
};
</script>