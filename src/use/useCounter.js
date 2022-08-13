import { reactive, computed, watch, onMounted, nextTick } from "vue";
export function useCounter() {
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

  return {
    counterData,
    decreaseCounter,
    increaseCounter,
    oddOrEven,
    onMounted,
  };
}
