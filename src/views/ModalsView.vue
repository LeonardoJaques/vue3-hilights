<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label> Show dark modals? </label>
      <input v-model="showDarkModals" type="checkbox" />
    </div>
    <button @click="showModal = true">Show modal</button>
    <component :is="Modal" v-model="showModal" title="My modal title (via prop)">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, alias, vero
        natus id earum placeat illum harum accusantium sint, et magni commodi nisi ipsum
        quis voluptatum. Ullam facilis consequuntur blanditiis.
      </p>
    </component>
  </div>
</template>

<script setup>
/*Imports*/
import { ref } from "@vue/reactivity";
import Modal from "@/components/Modal.vue";

/*Modals*/
const showDarkModals = ref(false);
const showModal = ref(false);
</script>
