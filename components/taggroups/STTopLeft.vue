<template>
  <div>
    <q-input
      v-model="userInput"
      color="secondary"
      placeholder="Wyszukiwarka sekcji"
    />
    <div class="q-pb-xs" />
    Autorzy: Grzegorz Perun & Daniel Nguyen
  </div>
</template>

<script>
export default {
  computed: {
    userInput: {
      get() {
        return this.$store.state.table.userInput;
      },
      set(value) {
        this.$store.dispatch("table/SET_USERINPUT", value);
      }
    }
  }
};
</script>
