<template>
  <div class="row q-pa-md justify-start">
    <div class="text-subtitle1">
      Spis do wyświetlania danych używa plików JSON hostowanych na GitHubie.
      Poniżej znajdują się do nich linki.
      <ul>
        <li>
          <a :href="sectionsLink" class="text-secondary">Sekcje</a>
        </li>
        <li>
          <a :href="tagGroupsLink" class="text-secondary">Tag-grupki</a>
        </li>
      </ul>
      <div>
        <q-banner class="bg-secondary text-white">
          <template v-slot:avatar>
            <q-icon name="warning" />
          </template>
          Powyższe linki zmieniają się po każdej aktualizacji spisu
        </q-banner>
      </div>
      <div class="q-pb-sm" />
      To jednak nie wystarczy. Aby móc ich użyć w typowym skrypcie JavaScript,
      najlepiej zastosować
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
        class="text-secondary"
        >Fetch API</a
      >
      tak jak pokazano poniżej.
      <code>
        <a-fetch />
      </code>
      Teraz pod zmiennymi sections i taggroups mamy zawarty "spis" sekcji i
      tag-grupek. Dzięki temu możemy ich użyć w naszym skrypcie. Poniższy kod
      wyświetla nazwy sekcji mających więcej niż 25000 członków przedzielone
      przecinkiem.
      <code>
        <a-script />
      </code>
      <q-btn class="full-width" color="secondary" @click="runScript"
        >Przetestuj skrypt</q-btn
      >
      <br />
      <div v-if="result !== null">
        <div class="q-pb-xs" />
        Wynik: {{ result }}
      </div>
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
    ...mapGetters({
      result: 'api/result',
      sectionsLink: 'api/sectionsLink',
      tagGroupsLink: 'api/tagGroupsLink'
    })
  },
  async mounted() {
    await this.$store.dispatch('api/SET_SECTIONSLINK')
    await this.$store.dispatch('api/SET_TAGGROUPSLINK')
  },
  methods: {
    async runScript() {
      let sections
      await fetch(
        'https://api.github.com/gists/e6fe59c222ff344652706429007c018b'
      )
        .then(response => response.json())
        .then(output =>
          JSON.parse(output.files['sectionspreview.json'].content)
        )
        .then(output => (sections = Array.from(output.sections)))

      this.$store.dispatch(
        'api/SET_RESULT',
        sections
          .filter(x => x.members > 25000)
          .map(x => x.name)
          .join(', ')
      )
    }
  }
}
</script>
