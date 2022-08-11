<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-model="showModal" title="My modal title (via prop)">

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, alias, vero
        natus id earum placeat illum harum accusantium sint, et magni commodi nisi ipsum
        quis voluptatum. Ullam facilis consequuntur blanditiis.
      </p>
    </Modal>
  </div>
</template>

<script setup>
/*Imports*/
import { ref } from "@vue/reactivity";
import Modal from "@/components/Modal.vue";

/*Modals*/
const showModal = ref(false);
</script>
