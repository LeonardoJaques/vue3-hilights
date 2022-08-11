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
import { ref, reactive, computed, watch, onMounted, nextTick } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
/*
  App title
*/
const appTitleRef = ref(null);

const appTitle = "My Amazing Counter AppS";
onMounted(() => {
  console.log(`The app title is: ${appTitleRef.value.offsetWidth} px  wide!`);
});

/*
    Counter
  */
const counterData = reactive({
  count: 0,
  title: "My Counter ",
});
const decreaseCounter = (amount) => (counterData.count -= amount);
const increaseCounter = async (amount, e) => {
  counterData.count += amount;
  await nextTick();
  console.log("Do something when counter has update in the dom");
};

watch(
  () => counterData.count,
  (newCount) => {
    if (newCount === 20) {
      alert("Way to go! You made it to 20!!!");
    }
  }
);

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return "even";
  return "odd";
});
onMounted(() => {
  console.log("Do stuff related to Counter");
});
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
