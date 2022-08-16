import { defineStore, acceptHMRUpdate } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "My Counter Title",
  }),
  actions: {
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter(amount) {
      this.count -= amount;
    },
  },
  getters: {
    oddOrEven(state) {
      return state.count % 2 === 0 ? "even" : "odd";
    },
  },
});

// make sure to pass the right store definition, `useCounterStore` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
