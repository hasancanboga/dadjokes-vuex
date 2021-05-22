<template>
  <div>
    <h1 class="text-xl">These are all the jokes you've retrieved</h1>
    <br />
    <h4 v-for="(joke, i) in jokes" :key="i">
      <span>{{ i + 1 }}: </span>
      {{ joke }}
    </h4>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      jokes: "getAllJokes",
    }),
  },
};
</script>