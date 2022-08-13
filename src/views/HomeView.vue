<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <div>
      <h3>{{ counterData.title }}:</h3>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>
    <p>This counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h4>Edit Counter Title</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
/*
  Imports
*/
import { ref, onMounted } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounter } from "@/use/useCounter";


/*
  App title
*/
const appTitleRef = ref(null);

const appTitle = "My Amazing Counter AppS";
onMounted(() => {
  console.log(`The app title is: ${appTitleRef.value.offsetWidth} px  wide!`);
});

/* Counter */
const { counterData, decreaseCounter, increaseCounter, oddOrEven } = useCounter();


</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 20px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
