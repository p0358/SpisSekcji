<template>
  <div>
    <q-input v-model="userInput" placeholder="Wyszukiwarka sekcji" />
    <div class="q-pb-xs" />
    Autorzy: Grzegorz Perun & Daniel Nguyen
    <q-toggle v-model="toggle" dense color="secondary">
      <q-tooltip content-class="bg-secondary"
        >Pokaż grupy liczące mniej niż 200 członków</q-tooltip
      >
    </q-toggle>
  </div>
</template>

<script>
export default {
  computed: {
    toggle: {
      get() {
        return this.$store.state.table.toggle
      },
      set(value) {
        this.$store.dispatch('table/SET_TOGGLE', value)
      }
    },
    userInput: {
      get() {
        return this.$store.state.table.userInput
      },
      set(value) {
        this.$store.dispatch('table/SET_USERINPUT', value)
      }
    }
  }
}
</script>
