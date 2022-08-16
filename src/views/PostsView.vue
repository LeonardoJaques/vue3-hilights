<template>
  <div class="post">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
    <div>
      <button @click="counter.increaseCounter(1)" class="counter-button"
        :class="{ 'yellow': counter.oddOrEven === 'odd' }">{{
            counter.count
        }}</button>
    </div>
  </div>
</template>
<script setup>
/* import */
import { vAutofocus } from "@/directives/vAutofocus";
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

/* counter Button */

const counter = useCounterStore()
/* Posts */
const posts = ref([
  {
    id: "id1",
    title: "Post 1",
  },
  {
    id: "id2",
    title: "Post 2",
  },
  {
    id: "id3",
    title: "Post 3",
  },
]);
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: blueviolet;
  border-radius: 10px;

}

.counter-button.yellow {
  background-color: yellow;
}
</style>
