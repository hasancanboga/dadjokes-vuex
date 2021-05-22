<template>
  <div>
    <h2 class="text-3xl font-bold my-4">Can I haz dad jokess</h2>
    <h3 class="">{{ joke }}</h3>
    <br />
    <button @click="addJoke" class="bg-green-900 rounded py-1 px-3">
      Add Joke
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  methods:{
    ...mapActions({addJoke: "setCurrentJoke"}),
  },
  computed: {
    ...mapGetters({joke: "getCurrentJoke"}),
  },
  // mounted() {
  //   this.joke = this.$store.getters.getCurrentJoke;
  // },
};
</script>
