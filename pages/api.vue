<template>
  <div class="row q-pa-md justify-start">
    <div class="text-subtitle1">
      Spis do wyświetlania danych używa plików JSON hostowanych na GitHubie.
      Poniżej znajdują się do nich linki.
      <ul>
        <li>
          <a
            href="https://gist.githubusercontent.com/Mensix/a3bdcc6a27d9410f97685b5b6cee5b69/raw/00601f8277e98187d2d027961f0b19e5b57a203e/sections.json"
            class="text-secondary"
            >Sekcje</a
          >
        </li>
        <li>
          <a
            href="https://gist.githubusercontent.com/Mensix/7f10483c0ebd5d6358657202b04b3c3b/raw/14be4bf10ba160ff181771eb7334cb46695bfe92/taggroups.json"
            class="text-secondary"
            >Tag-grupki</a
          >
        </li>
      </ul>
      To jednak nie wystarczy. Aby móc ich użyć w typowym skrypcie JavaScript,
      najlepiej zastosować
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
        class="text-secondary"
        >Fetch API</a
      >
      tak jak pokazano poniżej.
      <code><a-fetch /></code>
      Teraz pod zmiennymi sections i taggroups mamy zawarty "spis" sekcji i
      tag-grupek. Dzięki temu możemy ich użyć w naszym skrypcie. Poniższy kod
      wyświetla nazwę sekcji mających dokładnie 2137 członków.
      <code><a-script /></code>
      <q-btn class="full-width" color="secondary" @click="runScript"
        >Przetestuj skrypt</q-btn
      >
      <br />
      <div v-if="result !== null">Wynik: {{ result }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AFetch from '~/components/api/AFetch.vue'
import AScript from '~/components/api/AScript.vue'
export default {
  layout: 'navbar',
  components: { 'a-fetch': AFetch, 'a-script': AScript },
  computed: {
    ...mapGetters({ result: 'api/result' })
  },
  methods: {
    async runScript() {
      let sections
      await fetch(
        'https://api.github.com/gists/a3bdcc6a27d9410f97685b5b6cee5b69'
      )
        .then(response => response.json())
        .then(
          output =>
            (sections = JSON.parse(output.files['sections.json'].content))
        )

      this.$store.dispatch(
        'api/SET_RESULT',
        sections
          .filter(x => x.members === 2137)
          .map(x => x.name)
          .join(', ')
      )
    }
  }
}
</script>
