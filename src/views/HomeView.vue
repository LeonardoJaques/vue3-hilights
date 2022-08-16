<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <div>
      <h3>{{ counter.title }}
      </h3>
      <button class="btn" @click="counter.decreaseCounter(2)">--</button>
      <button class=" btn" @click="counter.decreaseCounter(1)">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increaseCounter(1)">+</button>
      <button class="btn" @click="counter.increaseCounter(2)">++</button>
    </div>
    <p>This counter is {{ counter.oddOrEven }}</p>
    <div class="edit">
      <h4>Edit Counter Title</h4>
      <input v-model="counter.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
/*
  Imports
*/
import { ref, onMounted } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "@/stores/counter";




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
const counter = useCounterStore()

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
